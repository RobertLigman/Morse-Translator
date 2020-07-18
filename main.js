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
    ")": "-.--.-",
    " ": " ",
}

const translationType = document.querySelector('#translation-type');
const inputTranslation = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');
let userChoice = '';
btn.addEventListener('click', function() {
    result.textContent = '';
    if (inputTranslation.value) {
        userChoice = inputTranslation.value;
        // console.log(userChoice)

        if (translationType.value == 'morse-to-text') {

            translateToText(userChoice);
            // console.log('Mors na text')

        } else {
            userChoice = userChoice.split('');
            translateToMorse(userChoice);
            // console.log('text na Mors')
        }
    }
})
const translateToMorse = (txt) => {
    // let newOutputArrayValue = [];
    const outputArrayValue = [];
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
    result.textContent = newOutputArrayValue;
    // console.log(newOutputArrayValue)
}

// const translateToText = (txt) => {
//     const outputArrayValue = [];
//     const array = txt.split(' ');
//     array.forEach(element => {
//         console.log(element);
//         // const jsonElement = Object.values(zmienna).filter((e) => { return e == element })
//             // 
//         outputArrayValue.push(zmienna[jsonElement]);
//         console.log(jsonElement)
//     })
//     const newOutputArrayValue = outputArrayValue.join('');
//     result.textContent = newOutputArrayValue;
//     // userChoice.forEach(element => {



//     //     console.log(element)
//     //         // // console.log(zmienna[element]);
//     //         // // // const jsonElement = 
//     //         // // console.log(typeof zmienna.element)
//     //         // // console.log(typeof zmienna.a)
//     //         // const jsonElement = Object.keys(zmienna).filter((e) => {

//     //     //     return e == element;

//     //     // });
//     //     // outputArrayValue.push(zmienna[jsonElement]);

//     //     // // const parsedJsonElement = jsonElement.join('');
//     //     // // console.log(zmienna.parsedJsonElement);
//     // });
//     // const newOutputArrayValue = outputArrayValue.join('');
//     // result.textContent = newOutputArrayValue;
// }

// // console.log(userChoice)
// // const element = 'a';