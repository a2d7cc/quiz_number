import { View, Text } from "react-native";
import { Pressable, StyleSheet, TextInput } from "react-native";
import Button from "../components/ui/Button";

function StartGame() {
  return (
    <View>
      <TextInput />
      <View>
        <View>
          <Button>Confirm</Button>
        </View>
        <View>
          <Button>Reset</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default StartGame;
