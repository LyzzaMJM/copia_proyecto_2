// Alfabeto a código Morse
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '.': '.-.-.-',
    ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '@': '.--.-',
    ' ': '/'
};

// Función para convertir texto a Morse
function textToMorse(text) {
    let morseText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();
        morseText += morseCode[char] ? morseCode[char] + ' ' : char;
    }
    return morseText.trim();
}

// Función para procesar el texto ingresado y mostrar el resultado
function processText() {
    const inputText = document.getElementById('inputText').value;
    const resultText = textToMorse(inputText);
    document.getElementById('resultText').value = resultText;
}
