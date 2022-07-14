import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Word = ({text}) => {
  let arr = text.split("");
  return (
  	 <View style={styles.container}>
      {/* <Text> */}
      {
        arr.map((s) => {
          return(
          <Text style={styles.box}>{s}</Text>
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
		fontSize : '20px',
		margin : '20px',
		border : '5px solid black',
		height : '100px',
		width : '100px',
		textAlign : 'center',
		alignSelf : 'center'
	}
})
export default Word;