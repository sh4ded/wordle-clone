import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

const Word = ({text, cor, scor, done, active, curr, anim}) => {
	const jitter = useRef(new Animated.Value(50)).current;
	const jitter1 = useRef(new Animated.Value(8)).current;
	useEffect(() => {
		if (active-1 === curr)
		{
		if (true)
		{
			if (text.length > 0)
			{
				function a() {
    			return new Promise(function(resolve) {
        			setTimeout(function() {
            			Animated.timing(jitter, {
      							toValue: 60,
      							duration: 50,
      							useNativeDriver: false
    						}).start();
            		resolve();
        			}, 0);
    			});
				}

				function b() {
    			return new Promise(function(resolve) {
        			setTimeout(function() {
            			Animated.timing(jitter, {
      							toValue: 50,
      							duration: 50,
      							useNativeDriver: false
    							}).start();
            			resolve();
        			}, 50);
    			});
				}
		
				a().then(b());

				function a1() {
    			return new Promise(function(resolve) {
        			setTimeout(function() {
            			Animated.timing(jitter1, {
      							toValue: 12,
      							duration: 50,
      							useNativeDriver: false
    						}).start();
            		resolve();
        			}, 0);
    			});
				}

				function b1() {
    			return new Promise(function(resolve) {
        			setTimeout(function() {
            			Animated.timing(jitter1, {
      							toValue: 8,
      							duration: 50,
      							useNativeDriver: false
    							}).start();
            			resolve();
        			}, 50);
    			});
				}
		
				a1().then(b1());
			}
		}
	}
	})
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
          <Animated.Text
          key={i}  
          style={[styles.box, (i < ind) ? styles.full : styles.empty, done ? ((cor.indexOf(i) !== -1) ? styles.correct : ((scor.indexOf(i) !== -1) ? styles.scorrect : styles.incorrect)) : null, 
          	{width: (anim && text.length-1 === i) ? jitter : 50},
          	{paddingTop: (anim && text.length-1 === i) ? jitter1 : 8},
          	{paddingBottom: (anim && text.length-1 === i) ? jitter1 : 8}]}
          >{s}</Animated.Text>
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
		fontWeight : 'bold',
		margin : 10,
		height : 'auto',
		borderWidth : 2,
		borderStyle : 'solid',
		textAlign : 'center'
	},
	empty : {
		borderColor : 'grey'
	},
	full : {
		borderColor : 'black'
	},
	correct : {
		color : 'white',

		backgroundColor : '#2b8744',
		borderColor : '#2b8744'
	},
	scorrect : {
		backgroundColor : '#cfb94c',
		borderColor : '#cfb94c',
		color : 'white'
	},
	incorrect : {
		color : 'white',
		backgroundColor : 'grey',
		borderColor : 'grey'
	}
})
export default Word;