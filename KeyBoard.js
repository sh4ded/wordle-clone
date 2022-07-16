import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function KeyBoard({ words, setWords, curr, handleSubmit }) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabets = alpha.map((x) => String.fromCharCode(x));
    const handleInput = (e) => {
        if (e === "ESC") {
            setWords((s) => {
                const tmp = s.slice();
                let x = tmp[curr];
                x = {
                    str: x.str.trim().slice(0, -1).padEnd(5, " "),
                    submit: false,
                    color: x.color,
                };
                tmp[curr] = x;
                console.log(tmp);
                return tmp;
            });
        } else if (e >= "A" && e <= "Z") {
            setWords((s) => {
                const tmp = s.slice();
                let x = tmp[curr];
                if (x.str.trim().length < 5) {
                    x = {
                        str: x.str.trim().concat(e).padEnd(5, " "),
                        submit: false,
                        color: x.color,
                    };
                }
                tmp[curr] = x;
                console.log(tmp);
                return tmp;
            });
        }
    };
    return (
        <View style={styles.box}>
            <View style={styles.container}>
                {alphabets.map((c, i) => {
                    return (
                        <View key={i} style={styles.btn}>
                            <Button
                                title={c}
                                color="#2d2b38"
                                onPress={handleInput.bind(this, c)}
                            ></Button>
                        </View>
                    );
                })}
                <View style={styles.btn}>
                    <Button
                        title="ESC"
                        color="#2d2b38"
                        onPress={handleInput.bind(this, "ESC")}
                    ></Button>
                </View>
                <View style={styles.btn}>
                    <Button
                        title="RET"
                        color="#2d2b38"
                        onPress={handleSubmit}
                    ></Button>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    btn: {
        width: 50,
        height: 50,
        margin: 5,
    },
});
