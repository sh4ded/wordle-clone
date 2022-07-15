import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import KeyBoard from "./keyBoard.js";
import Word from "./word.js";

export default function App() {
    useEffect(() => {
        console.log("rerendered!");
    });
    const inputRef = useRef();
    const checkWord = "lemon";
    // State of a word
    const word = {
      str: "",
      submit: false,
    }
    const [words, setWords] = useState([]);

    const [text1, setText1] = useState(""); // Word
    const [done1, setDone1] = useState(false);  // Entered ?


    const [cor1, setCor1] = useState([]);   // correctly placed letters
    const [scor1, setScor1] = useState([]); // Correct letter but wrongly placed

    const [text2, setText2] = useState("");
    const [done2, setDone2] = useState(false);
    const [cor2, setCor2] = useState([]);
    const [scor2, setScor2] = useState([]);
    const [text3, setText3] = useState("");
    const [done3, setDone3] = useState(false);
    const [cor3, setCor3] = useState([]);
    const [scor3, setScor3] = useState([]);
    const [text4, setText4] = useState("");
    const [done4, setDone4] = useState(false);
    const [cor4, setCor4] = useState([]);
    const [scor4, setScor4] = useState([]);
    const [text5, setText5] = useState("");
    const [done5, setDone5] = useState(false);
    const [cor5, setCor5] = useState([]);
    const [scor5, setScor5] = useState([]);
    const [text6, setText6] = useState("");
    const [done6, setDone6] = useState(false);
    const [cor6, setCor6] = useState([]);
    const [scor6, setScor6] = useState([]);
    const [curr, setCurr] = useState(0);
    function handleSubmit() {
        let ary = [];
        if (curr === 0) {
            ary = text1.split("");
        } else if (curr === 1) {
            ary = text2.split("");
        } else if (curr === 2) {
            ary = text3.split("");
        } else if (curr === 3) {
            ary = text.split("");
        } else if (curr === 4) {
            ary = text5.split("");
        } else if (curr === 5) {
            ary = text6.split("");
        }
        console.log(ary);
        let nry = [];
        let yry = [];
        for (let i = 0; i < 5; i++) {
            if (ary[i] === checkWord.charAt(i)) {
                nry += i;
            } else if (checkWord.indexOf(ary[i]) !== -1) {
                yry += i;
            }
        }
        console.log(nry);
        if (curr === 0) {
            setCor1(nry);
            setScor1(yry);
            setDone1(true);
        } else if (curr === 1) {
            setCor2(nry);
            setScor2(yry);
            setDone2(true);
        } else if (curr === 2) {
            setCor3(nry);
            setScor3(yry);
            setDone3(true);
        } else if (curr === 3) {
            setCor4(nry);
            setScor4(yry);
            setDone4(true);
        } else if (curr === 4) {
            setCor5(nry);
            setScor5(yry);
            setDone5(true);
        } else if (curr === 5) {
            setCor6(nry);
            setScor6(yry);
            setDone6(true);
        }
        setCurr(curr + 1);
    }
    function handleChange(newText) {
        if (curr === 0) {
            if (newText) {
                if (newText.length <= 5) {
                    setText1(newText);
                }
            } else {
                setText1(newText);
            }
        } else if (curr === 1) {
            if (newText) {
                if (newText.length <= 5) {
                    setText2(newText);
                }
            } else {
                setText2(newText);
            }
        } else if (curr === 2) {
            if (newText) {
                if (newText.length <= 5) {
                    setText3(newText);
                }
            } else {
                setText3(newText);
            }
        } else if (curr === 3) {
            if (newText) {
                if (newText.length <= 5) {
                    setText4(newText);
                }
            } else {
                setText4(newText);
            }
        } else if (curr === 4) {
            if (newText) {
                if (newText.length <= 5) {
                    setText5(newText);
                }
            } else {
                setText5(newText);
            }
        } else if (curr === 5) {
            if (newText) {
                if (newText.length <= 5) {
                    setText6(newText);
                }
            } else {
                setText6(newText);
            }
        }
        /*let j = text.indexOf(' ');
    console.log(j);
    console.log("."+newText+".");
    if (j === -1)
    {
      if (newText.length <= 5)
      {
        setText(newText);
      }
    }
    else
    {
      if (newText)
      {
        if (newText.length < text.length)
        {
          if (newText.slice(-1) === ' ')
          {
            setText(newText.replace(/\s*$/, ""));
          }
          else
          {
            if (text.slice(-1) === ' ')
            {
              setText(newText.slice(0,-1).replace(/\s*$/, ""));
            }
            else
            {
              setText(newText);
            }
          }
        }
        else
        {
          setText(text.substring(0,j)+newText.slice(-1)+text.substring(j+1,5));
        }
      }
    }*/
    }
    return (
        <View style={styles.container}>
            <Text>Wordle</Text>
            <TextInput
                ref={inputRef}
                /*style={styles.input}*/
                caretHidden
                autoFocus={true}
                placeholder="WORDLE"
                value={
                    curr === 0
                        ? text1
                        : curr === 1
                        ? text2
                        : curr === 2
                        ? text3
                        : curr === 3
                        ? text4
                        : curr === 4
                        ? text5
                        : text6
                }
                onChangeText={(newText) => handleChange(newText)}
                onSubmitEditing={handleSubmit}
                onLayout={() => inputRef.current.focus()}
            />
            <Word text={text1} cor={cor1} scor={scor1} done={done1} />
            <Word text={text2} cor={cor2} scor={scor2} done={done2} />
            <Word text={text3} cor={cor3} scor={scor3} done={done3} />
            <Word text={text4} cor={cor4} scor={scor4} done={done4} />
            <Word text={text5} cor={cor5} scor={scor5} done={done5} />
            <Word text={text6} cor={cor6} scor={scor6} done={done6} />
            <KeyBoard />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 0,
        width: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
