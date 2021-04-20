import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import ROUTE_NAMES from "../../navigation/config/route-names";
import Stack1Screen from "./screens/main/index";
import Styles from "../../config/styles";

const Stack = createStackNavigator();

const Stack1 = () => (
  <Stack.Navigator
    initialRouteName={ROUTE_NAMES.STACK_1_MAIN}
    screenOptions={{
      animationEnabled: true,
      headerTitleStyle: Styles.headerTitleStyle,
      headerStyle: Styles.headerContainerStyle,
      headerTitle: "",
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Icon
          name="arrow-left"
          size={24}
          style={Platform.OS === "ios" ? Styles.ml20 : Styles.ml10}
        />
      )
    }}
  >
    <Stack.Screen name={ROUTE_NAMES.STACK_1_MAIN} component={Stack1Screen} />
  </Stack.Navigator>
);

export default Stack1;
