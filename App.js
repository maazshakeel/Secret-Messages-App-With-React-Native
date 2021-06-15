import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Pressable, Button, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Separator = () => (
  <View style={styles.separator} />
);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Secret Messages</Text>
        <View style={{flexDirection: 'row', marginTop: 50, marginBottom: 15}}>
          <TextInput placeholderTextColor = "white" style={[styles.input, styles.messageInputStyling]} placeholder="Message" />
          <TextInput keyboardType="numeric" placeholderTextColor = "white" style={[styles.input, styles.keyInputStyling]} placeholder="Key" />
        </View>
        {/* <Button style={styles.button} title="Encrypt" color="#f194ff" /> */}
        {/* <Pressable style={styles.button} >
          <Text style={styles.text}>Save</Text>
        </Pressable> */}
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
    color: 'white',
    marginLeft: 12,
    fontFamily: 'sans-serif-medium'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 18,
    fontFamily: 'Roboto',
    fontSize: 20, 
    borderRadius: 25,
  },
  keyInputStyling: {
    width: 15,
    minWidth: 80,
  },
  messageInputStyling: {
    width: 35,
    minWidth: 262,
    marginLeft: 7,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  encryptButton: {
  }  
});
