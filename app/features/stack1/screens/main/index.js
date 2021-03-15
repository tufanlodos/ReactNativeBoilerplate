import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../../../../config/styles";

const Stack1Screen = () => {
  return (
    <SafeAreaView style={Styles.f1}>
      <Text>Stack 1 Main Screen</Text>
    </SafeAreaView>
  );
};

export default Stack1Screen;
