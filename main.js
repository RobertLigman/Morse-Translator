const zmienna = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}
const outputArrayValue = [];
// console.log(zmienna)
let userChoice = 'zalukaj.com';
userChoice = userChoice.split('');
// console.log(userChoice)
const element = 'a';
userChoice.forEach(element => {
    // console.log(zmienna[element]);
    // // const jsonElement = 
    // console.log(typeof zmienna.element)
    // console.log(typeof zmienna.a)
    const jsonElement = Object.keys(zmienna).filter((e) => {

        return e == element;

    });
    outputArrayValue.push(zmienna[jsonElement]);

    // const parsedJsonElement = jsonElement.join('');
    // console.log(zmienna.parsedJsonElement);
});
const newOutputArrayValue = outputArrayValue.join('');