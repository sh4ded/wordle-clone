import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import KeyBoard from "./KeyBoard";
import Word from "./Word";

export default function App() {
    let todayWord = "BURST";
    let word = {
        str: "     ",
        submit: false,
        color: ["White", "White", "White", "White", "White"],
    };
    const [words, setWords] = useState([word, word, word, word, word, word]);
    const [curr, setCurr] = useState(0); // Current try
    const handleSubmit = () => {
        if (words[curr].str.trim().length == 5) {
            setWords((s) => {
                let tmp = s.slice();
                let x = tmp[curr];
                let checkWord = tmp[curr].str;
                let flagWord = todayWord;
                const arr = [];
                for (let i = 0; i < 5; i++) {
                    let c = checkWord.charAt(i);
                    if (c == flagWord.charAt(i)) {
                        arr.push("Green");
                        flagWord.replace(c, "");
                    } else if (flagWord.indexOf(c) != -1) {
                        arr.push("Yellow");
                    } else {
                        arr.push("Gray");
                    }
                }
                x = { str: x.str, submit: true, color: arr };
                tmp[curr] = x;
                console.log(tmp);
                return tmp;
            });
            setCurr((s) => s + 1);
        } else {
            alert("Fill the cells");
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>WORDLE</Text>
            </View>
            {words.map((s, i) => {
                return <Word text={s.str} color={s.color} key={i} />;
            })}
            <KeyBoard
                words={words}
                setWords={setWords}
                handleSubmit={handleSubmit}
                curr={curr}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        fontSize: 50,
        margin: 20,
    },
    box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        minHeight: '40%',
    },
});
