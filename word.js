import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useEffect } from 'react';

const Word = ({text, setText}) => {
  let arr = text.split("");
  function handlePress (e, key) {
  	let temp = text;
  	setText(temp.substring(0,key)+" "+temp.substring(key+1));
  }
  for(let i = 0; i < 5; i++)
  {
  	if (!arr[i])
  		arr[i]=" ";
  }
  return (
  	 <View style={styles.container}>
      {/* <Text> */}
      {
        arr.map((s, i) => {
          return(
          <Text
          key={i} 
          onPress={e => handlePress(e, i)} 
          style={styles.box}
          >{s}</Text>
        );
      })
      }
      {/* </Text> */}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		justifyContent : 'center'
	},
	box : {
		fontSize : 20,
		margin : 10,
		borderWidth : 2,
		borderStyle : 'solid',
		borderColor : 'black',
		height : 50,
		width : 50,
		textAlign : 'center'
	}
})
export default Word;