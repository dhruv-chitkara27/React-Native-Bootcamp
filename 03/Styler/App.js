import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 50 }}>
        <View style={{ width: 100, height: 100, backgroundColor: "#2980b9"}} />
        <View style={{ width: 100, height: 100, backgroundColor: "#27ae60"}} />
        <View style={{ width: 100, height: 100, backgroundColor: "#f0932b"}} />
      </View>
    );
  }
}


