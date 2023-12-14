import { Text, View } from "react-native";

function LogItem({ roundNumber, guess }) {
  return (
    <View style={styles.container}>
      <Text>#{roundNumber}</Text>
      <Text>Machine guess: {guess}</Text>
    </View>
  );
}

const styles = StyleScheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 5,
  },
});

export default LogItem;
