import React from "react";
import { TouchableOpacity, StyleSheet, View, Button, Text } from "react-native";

const ButtonWrapper = () => {
  return (
    <View style={buttonsContainer}>
      <TouchableOpacity style={button} title="Like">
        <Text style={buttonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} title="Share">
        <Text style={buttonText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} title="Comment">
        <Text style={buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    height: 30
  },
  button: {
    height: 30,
    width: 90,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center"
  }
});

const { buttonsContainer, button, buttonText } = styles;

export default ButtonWrapper;
