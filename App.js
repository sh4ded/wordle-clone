import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Word from './word.js'

export default function App() {
  const inputRef = useRef();
  const [text, setText] = useState("");
  function handleChange (newText) {
    let j = text.indexOf(' ');
    console.log(j);
    console.log("."+newText+".");
    if (j === -1)
    {
      if (newText.length <= 5)
      {
        setText(newText);
      }
    }
    else
    {
      if (newText)
      {
        if (newText.length < text.length)
        {
          if (newText.slice(-1) === ' ')
          {
            setText(newText.replace(/\s*$/, ""));
          }
          else
          {
            if (text.slice(-1) === ' ')
            {
              setText(newText.slice(0,-1).replace(/\s*$/, ""));
            }
            else
            {
              setText(newText);
            }
          }
        }
        else
        {
          setText(text.substring(0,j)+newText.slice(-1)+text.substring(j+1,5));
        }
      }
    }
  }
  return (
    <View style={styles.container}>
    <Text>Wordle</Text>
      <TextInput 
      ref={inputRef} 
      style={styles.input} 
      caretHidden 
      autoFocus={true} 
      placeholder="hi" 
      value={text}
      onChangeText={newText => handleChange(newText)}
      onLayout={()=> inputRef.current.focus()}
      />
      <Word text={text} setText={setText}/>
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
