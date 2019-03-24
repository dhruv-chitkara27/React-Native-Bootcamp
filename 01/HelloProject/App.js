import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NameText from './src/components/NameText';

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <NameText value="Dhruv Chitkara"/>
      <Image 
      source={require("./src/images/email.png")}
      />
      <Image source={{
        uri: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }} 
      style={{width: 300, height: 300 }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }
});