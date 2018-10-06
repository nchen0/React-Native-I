import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ButtonWrapper from "./components/ButtonWrapper";
import CommentWrapper from "./components/CommentWrapper";

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text style={header}>Nimbus</Text>
        <Image source={require("./img/dog.jpg")} style={{ width: 375, height: 320 }} />
        <ButtonWrapper />
        <CommentWrapper />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30
  },
  header: {
    fontSize: 30,
    marginBottom: 20
  }
});

const { container, header } = styles;
