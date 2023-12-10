import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "opensans-bold",
    color: "white",
    margin: 4,
    padding: 12,
    textAlign: "center",
  },
});

export default Title;
