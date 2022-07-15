import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useEffect } from 'react';

const Word = ({text, cor, scor, done}) => {
  let arr = text.split("");
  let ind = (text === '') ? -1 : text.length;
  //console.log(ind);
  /*function handlePress (e, key) {
  	let temp = text;
  	setText(temp.substring(0,key)+" "+temp.substring(key+1));
  }*/
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
          style={[styles.box, (i < ind) ? styles.full : styles.empty, done ? ((cor.indexOf(i) !== -1) ? styles.correct : ((scor.indexOf(i) !== -1) ? styles.scorrect : styles.incorrect)) : null]}
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
		height : 50,
		width : 50,
		textAlign : 'center'
	},
	empty : {
		borderColor : 'grey'
	},
	full : {
		borderColor : 'black'
	},
	correct : {
		borderColor : 'green'
	},
	scorrect : {
		borderColor : 'yellow'
	},
	incorrect : {
		borderColor : 'red'
	}
})
export default Word;