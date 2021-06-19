import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Message from './Message'

const styles = StyleSheet.create({
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
    encryptMessage: '',
    disabledButtons: false, 
    showEncryptMessage: false,
  }
  handleKeyInput = key => {
    if (+key >= 0) {
      this.setState({key, disabledButtons: true})
    }
  }
  handleMessageInput = message => {
    this.setState({message})
  }
  onSubmit = () => {
    console.log("calling!")
  }
  encryptMessage = () => {
    if (amount < 0) {
      return caesarShift(str, amount + 26);
    }

    var str = this.state.message;
    var amount = +this.state.key;

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }

      // Append
      output += c;
    }

    // All done!
    this.setState(() => ({
      encryptMessage: output,
      showEncryptMessage: true,
      disabledButtons: true,
      key: '',
      message: '',
    }))
  };
  decryptMessage = () => {
      if (amount < 0) {
      return caesarShift(str, amount + 26);
    }

    // Make an output variable
    var output = "";

    var str = this.state.message;
    console.log(str)
    var amount = +this.state.key;
    amount = amount * -1;
    amount = amount + 26;
    console.log(amount)


    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }

      // Append
      output += c;
    }

    // All done!
    this.setState(() => ({
      encryptMessage: output,
      showEncryptMessage: true,
      disabledButtons: true,
    }))
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Secret Messages</Text>
        <View style={{flexDirection: 'row', marginTop: 50, marginBottom: 15}}>
          <TextInput 
            placeholderTextColor="white" 
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
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={styles.area} onPress={this.encryptMessage} disabled={!this.state.disabledButtons}>
            <Text style={styles.paragraph}>
                Encrypt 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areaD} onPress={this.decryptMessage} disabled={!this.state.disabledButtons}>
            <Text style={styles.paragraph}>
              Decrypt 
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.showEncryptMessage && <Message encryptMessage={this.state.encryptMessage} showEncryptMessage={this.state.showEncryptMessage} />}
      </View>
    );
  }
}
