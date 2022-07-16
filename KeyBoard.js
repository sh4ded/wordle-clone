import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import KeyBtn from "./KeyButton";

export default function KeyBoard({
    words,
    setWords,
    curr,
    handleSubmit,
    crct,
    pcrct,
    incrct,
}) {
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
        <View style={styles.container}>
            {alphabets.map((c, i) => {
                return (
                    <KeyBtn
                        key={i}
                        text={c}
                        color={
                            crct.indexOf(c) !== -1
                                ? "x"
                                : pcrct.indexOf(c) !== -1
                                ? "pcrct"
                                : incrct.indexOf(c) !== -1
                                ? "incrct"
                                : "normal"
                        }
                        onPress={handleInput.bind(this, c)}
                    />
                );
            })}
            <KeyBtn
                text="<-"
                color="normal"
                onPress={handleInput.bind(this, "ESC")}
            />
            <KeyBtn text="ENTER" color="normal" onPress={handleSubmit} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        marginTop: '55%',
        flex: 1,
        width: "95%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
        borderRadius: 5,
        marginBottom: 20,
    },
});
