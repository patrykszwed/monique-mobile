import React from "react";
import Logo from "../components/Logo";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
  View,
  AppRegistry,
  Button
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tts from "react-native-tts";

export default class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    let icon = this.props.icon;
    this.state = {
      text: "",
      isMicPressed: false,
      icon: icon
    };
    this.onSave = this.onSave.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onMicPressed = this.onMicPressed.bind(this);

    console.log("icon = " + icon);
  }

  onSave() {
    // Tts.speak("Hello, world!");
    console.log("Save");
  }

  onBack() {
    // Tts.speak("Hello, world!");
    console.log("Back");
    this.props.handleBackPress();
  }

  onMicPressed() {
    console.log("onMicPressed()");
    console.log("We should add speech algorithms here");
    this.setState({
      isMicPressed: !this.state.isMicPressed
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        />
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={
            this.state.icon === "textToSpeech"
              ? "Use a speaker button to read your text aloud"
              : "Use a microphone button and a text will appear here"
          }
          multiline={true}
          textAlignVertical="top"
          editable={this.state.icon === "textToSpeech"}
          style={styles.inputText}
        />
        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.onBack}
            title="Back"
            color="#841584"
            accessibilityLabel="Go back"
          />

          <TouchableOpacity onPress={this.onMicPressed}>
            <View>
              <Image
                source={
                  this.state.icon === "textToSpeech"
                    ? this.state.isMicPressed
                      ? require("../assets/images/mutedSpeaker.png")
                      : require("../assets/images/speaker.png")
                    : this.state.isMicPressed
                    ? require("../assets/images/muted.png")
                    : require("../assets/images/microphone.png")
                }
                style={styles.mainImage}
              />
            </View>
          </TouchableOpacity>

          <Button
            onPress={this.onSave}
            title="Save"
            color="#841584"
            accessibilityLabel="Save changes"
            disabled={this.state.text.length <= 0}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-around"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    padding: 50
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
    marginBottom: 60
  },
  mainImage: {
    width: 70,
    height: 40,
    resizeMode: "contain"
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    borderRadius: 20,
    padding: 10
  }
});
