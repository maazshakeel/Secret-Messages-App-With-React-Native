import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row', 
    marginTop: 20
  }
  container: {
    flex: 1,
    backgroundColor: '#232F34',
    paddingTop: 50,
  },
  textHeading: {
    fontSize: 42,
    color: 'white',
    marginLeft: 30,
    fontFamily: 'sans-serif-medium'
  },
  input: {
    borderWidth: 4,
    borderColor: 'black',
    marginTop: 12,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 18,
    fontFamily: 'Roboto',
    fontSize: 20, 
    borderRadius: 25,
  },
  keyInputStyling: {
    width: 20,
    minWidth: 90,
  },
  messageInputStyling: {
    width: 35,
    minWidth: 220,
    marginLeft: 6,
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
    fontSize: 50,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  area:{
     backgroundColor: '#cccccc',
     borderRadius:20,
     borderWidth: 4,
     padding:2,
     margin:2,
     marginLeft: 6,
     width: 168,
  },
  areaD:{
     backgroundColor: '#cccccc',
     borderRadius:20,
     borderWidth: 4,
     padding:2,
     margin:2,
     marginLeft: 10,
     width: 168,
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  encryptButton: {
  }  
});

export default class Functionality extends React.Component {
  state = {
    message: '',
    key: '',
  }
  handleKeyInput = key => {
    this.setState({key})
  }
  handleMessageInput = message => {
    this.setState({message})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Secret Messages</Text>
        <View style={{flexDirection: 'row', marginTop: 50, marginBottom: 15}}>
          <TextInput 
            placeholderTextColor = "white" 
            style={[styles.input, styles.messageInputStyling]} 
            placeholder="Message" 
            value={this.state.message}
            onChangeText={this.handleMessageInput}
          />
          <TextInput 
            keyboardType="numeric" 
            placeholderTextColor = "white" 
            style={[styles.input, styles.keyInputStyling]} 
            placeholder="Key" 
            value={this.state.key}
            onChangeText={this.handleKeyInput}
          />
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.area}>
            <Text style={styles.paragraph}>
                Encrypt 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areaD}>
            <Text style={styles.paragraph}>
              Decrypt 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
