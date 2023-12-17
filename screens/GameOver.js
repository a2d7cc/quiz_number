import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";

function EndGame({ roundsLength, userNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Title>Game Over</Title>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsLength}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  summaryText: {
    fontFamily: "opensans-regular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "opensans-bold",
    color: Colors.primary500,
  },
});

export default EndGame;
