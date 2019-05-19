import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return <ExpoConfigView />;
  }
}
