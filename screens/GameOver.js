import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";

function EndGame() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Title>Game Over</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    marginTop: 100,
    width: 200,
    height: 200,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: Colors.accent500,
    overflow: "hidden",
  },
});

export default EndGame;
