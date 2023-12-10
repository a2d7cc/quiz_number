import { Children } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function Button({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  buttonOuterContainer: { margin: 4, borderRadius: 20, overflow: "hidden" },
  buttonInnerContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,

    backgroundColor: Colors.primary700,
    elevation: 2,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default Button;
