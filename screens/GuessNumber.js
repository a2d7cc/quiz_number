import { StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";

function GuessNumber() {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>25</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button>-</Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button>+</Button>
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
