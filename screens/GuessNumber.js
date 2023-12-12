import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../util/random";
import { useEffect, useState } from "react";

let minBoundary = 1;
let maxBoundary = 100;

function GuessNumber({ userNumber, onEndGame, onRefreshGame }) {
  const initialGues = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGues);

  useEffect(() => {
    if (currentGuess == userNumber) {
      setTimeout(() => {
        Alert.alert("Success", "It's your number", [
          {
            text: "Confirm",
            onPress: () => onEndGame(true),
          },
        ]);
      }, 2000);
    }
  }, [currentGuess, userNumber, onEndGame]);

  const generateNewNumber = (direction) => {
    if (
      (currentGuess < userNumber && direction === "down") ||
      (currentGuess > userNumber && direction === "up")
    ) {
      Alert.alert("Error", "It's impossible", [
        {
          text: "Start again",
          onPress: () => onRefreshGame(),
        },
      ]);
      return;
    }

    if (currentGuess === 1 && direction === "down") {
      Alert("Error", "You can go lower");
      return;
    }
    if (currentGuess === 99 && direction === "up") {
      Alert("Error", "You can go higher");
      return;
    }

    switch (direction) {
      case "down":
        maxBoundary = currentGuess;
        setCurrentGuess(generateRandomBetween(minBoundary, currentGuess));
        break;
      case "up":
        minBoundary = currentGuess;
        setCurrentGuess(generateRandomBetween(currentGuess, maxBoundary));
        break;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Title>It's your number?</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button onPress={() => generateNewNumber("down")}>-</Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={() => generateNewNumber("up")}>+</Button>
        </View>
      </View>
    </View>
  );
}

export default GuessNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
  },
  numberContainer: {},
  number: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
});
