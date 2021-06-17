import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Clipboard, TouchableOpacity, Button, TextInput, Text, View, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  area:{
    backgroundColor: '#cccccc',
    borderRadius:20,
    borderWidth: 4,
    padding:2,
    margin:2,
    marginLeft: 6,
    marginTop: 10,
    width: 168,
 },
 paragraph: {
  margin: 24,
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center',
  },
})

class Message extends React.Component {
  copyToClipboard = () => {
    Clipboard.setString(this.props.encryptMessage)
    Alert.alert('Text Copied')
  }

  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{color: 'white', fontSize: 35}}>Your Encrypted Message</Text>
        <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>{this.props.encryptMessage}</Text>
        <TouchableOpacity style={styles.area} onPress={this.copyToClipboard}>
            <Text style={styles.paragraph}>
                Copy to clipboard 
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Message;
