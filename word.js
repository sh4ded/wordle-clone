import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Word({ text, color }) {
    const arr = text.split("");
    const txtColor = color;
    return (
        <View style={styles.wordBox}>
            {arr.map((s, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.letterBox,
                            color[i] == "White"
                                ? styles.White
                                : color[i] == "Gray"
                                ? styles.Gray
                                : color[i] == "Green"
                                ? styles.Green
                                : styles.Yellow,
                        ]}
                    >
                        <Text>{s}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    wordBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    letterBox: {
        borderWidth: 2,
        margin: 2,
        height: 40,
        width: 40,
        textAlign: "center",
        padding: 20,
    },
    Yellow: {
        backgroundColor: "yellow",
        color: "white",
    },
    Green: {
        backgroundColor: "green",
        color: "white",
    },
    Gray: {
        color: "white",
        backgroundColor: "gray",
    },
    White: {
        backgroundColor: "#ffffff",
    },
});
