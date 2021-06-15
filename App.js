import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Functionality from './Functionality';

const Separator = () => (
  <View style={styles.separator} />
);


export default class App extends React.Component {
  render() {
    return (
      <Functionality />
    );
  }
}