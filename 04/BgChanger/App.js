import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      randomColor: null
    };
    this.state = {
      randomColors: null
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      ")"
    )
  }

  getRandomColors = () => {
    return (
      "rgb(" +
      Math.floor((Math.random() * 456)) +
      "," +
      Math.floor((Math.random() * 456)) +
      "," +
      Math.floor((Math.random() * 456)) +
      ")"
    )
  }


  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() })
    this.setState({ randomColor: this.getRandomColors() })

  }

  myImagePressed = () => {
    Alert.alert("I clicked the image");
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
      <TouchableOpacity
      onPress={this.myButtonPressed} >
        <Text style={[styles.text, { backgroundColor: this.state.randomColors }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.myImagePressed}
        >
          <Image
          style={{width: 300, height: 200, marginTop: 20}}
          source={{uri: 'https://images.pexels.com/photos/1739840/pexels-photo-1739840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "black",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
