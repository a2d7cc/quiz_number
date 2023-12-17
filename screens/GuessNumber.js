import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../util/random";
import { useEffect, useState } from "react";
import LogItem from "../components/game/LogItem";

let minBoundary = 1;
let maxBoundary = 100;

function GuessNumber({ userNumber, onEndGame, onRefreshGame }) {
  const initialGues = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGues);
  const [guessRounds, setGuessRounds] = useState([initialGues]);

  useEffect(() => {
    if (currentGuess == userNumber) {
      setTimeout(() => {
        Alert.alert("Success", "It's your number", [
          {
            text: "Confirm",
            onPress: () => onEndGame(guessRounds.length),
          },
        ]);
      }, 2000);
    }
  }, [currentGuess, userNumber, onEndGame]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title>It's your number?</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button onPress={() => nextGuessHandler("lower")}>-</Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={() => nextGuessHandler("greater")}>+</Button>
        </View>
      </View>
      <View style={styles.roundsContainer}>
        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={guessRounds}
          renderItem={(itemData) => (
            <LogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GuessNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
    alignItems: "center",
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
  roundsContainer: {
    flex: 1,
    padding: 16,
  },
});
