import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Word({ text, color }) {
    const arr = text.split("");
    const txtColor = color;
    return (
        <View style={styles.wordBox}>
            {arr.map((s, i) => {
                return (
                    <Text
                        key={i}
                        style={[
                            styles.letterBox,
                            color.indexOf('White') !== -1 ?
                            (i < text.indexOf(' ') || text.indexOf(' ') === -1 ? styles.full : styles.empty) :
                            (color[i] === 'Gray'
                            	? styles.Gray
                              : color[i] === 'Green'
                              ? styles.Green
                             	: styles.Yellow)
                        ]}>{s}</Text>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    wordBox: {
        flexDirection: "row",
        justifyContent: "center"
    },
    letterBox: {
        fontSize : 20,
				fontWeight : 'bold',
				margin : 10,
				height : 'auto',
				width : 50,
				paddingTop : 8,
				paddingBottom : 8,
				borderWidth : 2,
				borderStyle : 'solid',
				textAlign : 'center',
				backgroundColor : '#fff'
    },
    Yellow: {
        color : 'white',
				backgroundColor : '#cfb94c',
				borderColor : '#cfb94c'
    },
    Green: {
    		backgroundColor : '#2b8744',
				borderColor : '#2b8744',
				color : 'white'
    },
    Gray: {
        color : 'white',
				backgroundColor : 'grey',
				borderColor : 'grey',
    },
    empty: {
        borderColor: 'grey'
    },
    full: {
    	borderColor: 'black'
    }
});
