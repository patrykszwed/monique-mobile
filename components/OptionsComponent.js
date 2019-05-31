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
  Button,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tts from "react-native-tts";

export default class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isMicPressed: false,
      modalVisible: false
    };
    this.onSave = this.onSave.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onInfoPress = this.onInfoPress.bind(this);
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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onInfoPress(visible) {
    console.log("Info");
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            />
            <Logo />
            <View>
              <Text style={styles.textInfoMain}>Authors:</Text>
              <Text style={styles.textInfo}>
                Patryk Szwed
                {"\n"} Igor Pogorzała
                {"\n"} Aleksander Wawrzyniak
              </Text>

              <Text style={styles.textInfoMain}>Contact:</Text>
              <Text style={styles.textInfo}>
                E-mail: example@gmail.com
                {"\n"} Webpage: www.mypage.com/contact
              </Text>

              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="Back"
                color="#841584"
                accessibilityLabel="Go back"
                style={styles.backButton}
              />
            </View>
            <ScrollView />
          </View>
        </Modal>

        <Text style={styles.textInfoMain}>Your name</Text>

        <TextInput
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          style={styles.inputText}
        />

        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.onBack}
            title="Back"
            color="#841584"
            accessibilityLabel="Go back"
          />

          <TouchableOpacity
            onPress={() => {
              this.onInfoPress(true);
            }}
          >
            <View>
              <Image
                source={require("../assets/images/info.png")}
                style={styles.mainImage}
              />
            </View>
          </TouchableOpacity>

          <Button
            onPress={this.onSave}
            title="Save"
            color="#841584"
            accessibilityLabel="Save changes"
            disabled={this.state.name.length > 0 ? false : true}
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
  backButton: {
    marginTop: 30
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
  textInfoMain: {
    fontSize: 22,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    // color: "#000",
    fontWeight: "bold",
    margin: 15
  },
  textInfo: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    // color: "#000",
    padding: 10
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
    height: 50,
    borderRadius: 20,
    padding: 10
  }
});
