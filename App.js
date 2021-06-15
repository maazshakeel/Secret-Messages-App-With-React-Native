import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Secret Messages</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput placeholderTextColor = "white" style={styles.input} placeholder="Message" />
          <TextInput placeholderTextColor = "white" style={[styles.input, styles.keyInputStyling]} placeholder="Key" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F34',
    paddingTop: 50,
  },
  textHeading: {
    fontSize: 48,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 18,
    fontFamily: 'sans-serif',
    fontSize: 18,
    borderRadius: 25,
  },
  keyInputStyling: {
    width: 15,
  }
});
