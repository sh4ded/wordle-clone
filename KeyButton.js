import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function KeyBtn({ text, color, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[
                    styles.btn,
                    (color == 'x')
                        ? styles.x
                        : (color == 'pcrct')
                        ? styles.crct
                        : (color == 'incrct')
                        ? styles.incrct
                        : styles.normal,
                ]}
            >
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 5,
        minWidth: 50,
        paddingHorizontal: 5,
        paddingVertical: 5,
        margin: 2,
    },
    btnText: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
    },
    normal: {
        backgroundColor: "#2d2b38",
    },
    x: {
        backgroundColor: "#2b8744",
    },
    incrct: {
        backgroundColor: "gray",
    },
    crct: {
        backgroundColor: "#cfb94c",
    },
});
