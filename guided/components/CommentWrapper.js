import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentWrapper = () => {
  return (
    <View style={commentWrapper}>
      <View style={textWrapper}>
        <Text style={commentText}>kailey412: That dog is so cute!</Text>
      </View>
      <View style={textWrapper}>
        <Text style={commentText}>kayster412: What a floof</Text>
      </View>
      <View style={textWrapper}>
        <Text style={commentText}>pacoman757: Nimbus is so white!</Text>
      </View>
      <View style={textWrapper}>
        <Text style={commentText}>pco567: What kind of dog is that?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: "column",
    marginTop: 10
  },
  textWrapper: {
    paddingLeft: 10,
    marginTop: 5,
    height: 35,
    borderWidth: 1,
    width: 375,
    justifyContent: "center"
  },
  commentText: {}
});

const { commentWrapper, commentText, textWrapper } = styles;

export default CommentWrapper;
