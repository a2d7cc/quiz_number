import { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/Colors";
import StartGame from "./screens/StartGame";
import { SafeAreaView } from "react-native-safe-area-context";
import GuessNumber from "./screens/GuessNumber";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userNumber, setUserNumber] = useState();

  const onPickNumber = (number) => {
    setUserNumber(number);
  };

  let screen = <StartGame onPickNumber={onPickNumber} />;
  // screen = <GuessNumber />;
  /* Load fonts */
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
          "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.rootScreen}>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
