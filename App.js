import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Word from './word.js'

export default function App() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length <= 5)
    setText(e.target.value);
  }
  return (
    <View style={styles.container}>
    <Text>Wordle</Text>
      <TextInput style={styles.input} caretHidden autoFocus={true} placeholder="hi" keyboardType="url" onChange={handleChange}/>
      <Word text={text} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input : {
    height: 'auto',
    width: 'auto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
