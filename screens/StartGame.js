import { View, Text } from "react-native";
import { Pressable, StyleSheet, TextInput } from "react-native";
import Button from "../components/ui/Button";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

function StartGame() {
  const [enteredNumber, setEnteredNumber] = useState("");
  return (
    <View style={styles.container}>
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
          <Button>Confirm</Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button>Reset</Button>
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
  },
  buttonWrapper: {
    flex: 1,
  },
});

export default StartGame;
