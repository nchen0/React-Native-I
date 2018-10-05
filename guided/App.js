import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image source={require("./img/dog.jpg")} style={{ width: 375, height: 320 }} />
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
    marginBottom: 30
  }
});
