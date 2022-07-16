import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function KeyBoard({text, setText, handleSubmit, cor, incor, scor, anim, setAnim}) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabets = alpha.map((x) => String.fromCharCode(x));
    //const [output, setOutput] = useState(text);
    console.log(cor);
    console.log(incor);
    const handleInput = (e) => {
        if (e === "ESC") {
            /*setOutput((s) => {
                let x = s.slice(0, -1);
                return x;
            });*/
            setText((s) => {
                let x = s.slice(0, -1);
                return x;
            });
            setAnim(false);
        } else if (e === "RET"){
            setAnim(true);
			handleSubmit();
		}
		else if (e >= "A" && e <= "Z") {
            if (text.length < 5) {
                /*setOutput((s) => {
                    let x = s.concat(e);
                    return x;
                });*/
                setText((s) => {
                    let x = s.concat(e);
                    return x;
                });
                setAnim(true);
            }
        }
    };
    //console.log(alphabets, alpha);
    return (
        <View style={styles.box}>
            {/*<View style={styles.box}>
                <Text>
                    OUTPUT: <Text>{o}</Text>
                </Text>
            </View>*/}
            <View style={styles.container}>
                {alphabets.map((c, i) => {
                    return (
                        <View style={styles.btn}>
                            <Button
                                title={c}
                                key={i}
                                color={(cor.indexOf(c) !== -1) ? '#2b8744' : (scor.indexOf(c) !== -1 ? '#cfb94c' : (incor.indexOf(c) !== -1 ? 'grey' : '#2d2b38'))}
                                onPress={handleInput.bind(this, c)}
                            ></Button>
                        </View>
                    );
                })}
                <View style={styles.btn}>
                    <Button
                        title="ENTER"
                        color="#2d2b38"
                        onPress={handleInput.bind(this, "RET")}
                    ></Button>
                </View>
                <View style={styles.btn}>
                    <Button
                        title="BKSPC"
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
        width: '90%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    btn: {
        minWidth: 50,
        height: 40,
        margin: 5,
    },
});
