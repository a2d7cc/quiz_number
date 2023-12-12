import { View, Text, Alert } from "react-native";
import { Pressable, StyleSheet, TextInput } from "react-native";
import Button from "../components/ui/Button";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../components/ui/Title";

function StartGame({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onConfirm = () => {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Wrong Number", "Pleease enter a value between 1 and 99", [
        {
          text: "Reset",
          onPress: () => onReset(),
        },
      ]);
    } else {
      onPickNumber(enteredNumber);
    }
  };

  const onReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.container}>
      <Title>Guess the number</Title>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
        style={styles.textInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button onPress={onConfirm}>Confirm</Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={onReset}>Reset</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
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

export default StartGame;
