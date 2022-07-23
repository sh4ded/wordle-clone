//import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, DevSettings, Alert } from "react-native";
import KeyBoard from "./KeyBoard";
import Word from "./word";
import axios from "axios";
import {Restart} from 'fiction-expo-restart';
//import getAll from './wordlist.js'

export default function App() {
    const [todayWord, setTodayWord] = useState("");
    const [curr, setCurr] = useState(0); //Current Try
    const [allWords, setAllWords] = useState([]);
    const fetchData = async () => {
        let location1 = "https://static.nytimes.com/newsgraphics/2022/01/25/wordle-solver/assets/solutions.txt";
        let location2 = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";
        await fetch(location1)
        .then((response) => response.text())
        .then((result) => {
            //setAllWords(result.split('\n'));
            setTodayWord(result.split('\n')[Math.floor(Math.random() * 2310)].toUpperCase());
        });
        await fetch(location2)
        .then((response) => response.text())
        .then((result) => {
            setAllWords(result.split('\n'));
        })
    };
    useEffect(() => {
        if (curr === 0)
        {
            fetchData();
        /*axios.get('https://random-word-api.herokuapp.com/word?length=5')
  .then(function (response) {
    // handle success
    setTodayWord(response.data[0].toUpperCase())
    console.log(response.data[0]);
  })
  .catch(error => {
    alert('Server Down! Please Try Again After Sometime!')
  })*/
  }
  if (curr > 0)
  {
    console.log(words[curr-1].color.filter(x => x === 'Green').length)
    if (words[curr-1].color.filter(x => x === 'Green').length === 5)
    {
        Alert.alert(
      "YOU WON!",
      "Wanna Play Again?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () =>   Restart() }
      ]
    );
    }
    else
    {
        if (curr === 6)
        {
            Alert.alert(
      "GAME OVER! :)",
      "The word was " + todayWord + "\nWanna Play Again?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => Restart() }
      ]
    );
        }
    }
  }
}, [curr])
    let word = {
        str: "     ",
        submit: false,
        color: ["White", "White", "White", "White", "White"]
    };
    const [words, setWords] = useState([word, word, word, word, word, word]);
    const [crct, setCrct] = useState([]); //List of correct letters found yet (right position)
    const [pcrct, setPcrct] = useState([]); //List of partially correct letters found yet (wrong position)
    const [incrct, setIncrct] = useState([]); //List of invalid letters
    const handleSubmit = () => {
        if (words[curr].str.trim().length == 5) {
            if (allWords.indexOf(words[curr].str.toLowerCase()) !== -1)
            {
            setWords((s) => {
                let tmp = s.slice();
                let c_tmp = crct; //Tmp for crct update
                let pc_tmp = pcrct; //"""
                let ic_tmp = incrct; //"""
                let x = tmp[curr];
                let checkWord = tmp[curr].str;
                let flagWord = todayWord;
                const arr = ["Gray","Gray","Gray","Gray","Gray"];
                for (let i = 0; i < 5; i++) {
                    let c = checkWord.charAt(i);
                    if (c === flagWord.charAt(i)) {
                        arr[i] = "Green";
                        flagWord = flagWord.replace(c, " ");
                        c_tmp.push(c);
                    }
                }
                for (let i = 0; i < 5; i++) {
                    let c = checkWord.charAt(i);
                    if (flagWord.indexOf(c) !== -1 && arr[i] != "Green") {
                        arr[i] = "Yellow";
                        flagWord = flagWord.replace(c, " ");
                        pc_tmp.push(c);
                    }
                    else {
                        ic_tmp.push(c);
                    }
                    console.log(flagWord);
                }
                x = { str: x.str, submit: true, color: arr };
                tmp[curr] = x;
                setCrct(c_tmp);
                setPcrct(pc_tmp);
                setIncrct(ic_tmp);
                //console.log(tmp);
                return tmp;
            });
            setCurr((s) => s + 1);
        }
        else
        {
            alert("Not a valid word!");
        }
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
