import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: "#2980b9"}}></View>
        <View style={{width: 100, height: 100, backgroundColor: "#27ae60"}}></View>
        <View style={{width: 150, height: 150, backgroundColor: "#f0932b"}}></View>
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
});
