//import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import KeyBoard from "./KeyBoard";
import Word from "./word";

export default function App() {
    let todayWord = "BURST";
    let word = {
        str: "     ",
        submit: false,
        color: ["White", "White", "White", "White", "White"],
    };
    const [words, setWords] = useState([word, word, word, word, word, word]);
    const [curr, setCurr] = useState(0); // Current try
    const [crct, setCrct] = useState([]); //List of correct letters found yet (right position)
    const [pcrct, setPcrct] = useState([]); //List of partially correct letters found yet (wrong position)
    const [incrct, setIncrct] = useState([]); //List of invalid letters
    const handleSubmit = () => {
        if (words[curr].str.trim().length == 5) {
            setWords((s) => {
                let tmp = s.slice();
                let c_tmp = crct; //Tmp for crct update
                let pc_tmp = pcrct; //"""
                let ic_tmp = incrct; //"""
                let x = tmp[curr];
                let checkWord = tmp[curr].str;
                let flagWord = todayWord;
                const arr = [];
                for (let i = 0; i < 5; i++) {
                    let c = checkWord.charAt(i);
                    if (c == flagWord.charAt(i)) {
                        arr.push("Green");
                        flagWord.replace(c, "");
                        c_tmp.push(c);
                    } else if (flagWord.indexOf(c) != -1) {
                        arr.push("Yellow");
                        pc_tmp.push(c);
                    } else {
                        arr.push("Gray");
                        ic_tmp.push(c);
                    }
                }
                x = { str: x.str, submit: true, color: arr };
                tmp[curr] = x;
                setCrct(c_tmp);
                setPcrct(pc_tmp);
                setIncrct(ic_tmp);
                console.log(tmp);
                return tmp;
            });
            setCurr((s) => s + 1);
        } else {
            alert("Fill the cells");
        }
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
                crct={crct}
                pcrct={pcrct}
                incrct={incrct}
            />
            <StatusBar style="auto" />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    header: {
        marginTop: 2,
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10
    },
    box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        minHeight: '40%'
    },
});
