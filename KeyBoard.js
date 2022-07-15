import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function KeyBoard() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabets = alpha.map((x) => String.fromCharCode(x));
    const [output, setOutput] = useState("HELLO");
    const handleInput = (e) => {
        if (e === "ESC") {
            setOutput((s) => {
                let x = s.slice(0, -1);
                return x;
            });
        } else if (e === "RET"){
			
		}
		else if (e >= "A" && e <= "Z") {
            if (output.length < 5) {
                setOutput((s) => {
                    let x = s.concat(e);
                    return x;
                });
            }
        }
    };
    console.log(alphabets, alpha);
    return (
        <View style={styles.box}>
            <View style={styles.box}>
                <Text>
                    OUTPUT: <Text>{output}</Text>
                </Text>
            </View>
            <View style={styles.container}>
                {alphabets.map((c, i) => {
                    return (
                        <View style={styles.btn}>
                            <Button
                                title={c}
                                key={i}
                                color="#2d2b38"
                                onPress={handleInput.bind(this, c)}
                            ></Button>
                        </View>
                    );
                })}
                <View style={styles.btn}>
                    <Button
                        title="RET"
                        color="#2d2b38"
                        onPress={handleInput.bind(this, "RET")}
                    ></Button>
                </View>
                <View style={styles.btn}>
                    <Button
                        title="ESC"
                        color="#2d2b38"
                        onPress={handleInput.bind(this, "ESC")}
                    ></Button>
                </View>
            </View>
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
        flex: 2,
        width: "30%",
        height: "80%",
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
