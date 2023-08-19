const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = ''
    let s = ''
    console.log(expr)
    for(let i = 0; i < expr.length; i += 10){
        s = expr.substring(i, i + 10)
        s = s.replace(/10/g, '.')
        s = s.replace(/11/g, '-')
        s = s.replace(/00/g, '')
        s = s.replace("**********", ' ')
        if(s === ' '){
            res += s
        }
        else{
            for(let key in MORSE_TABLE){
                if (key === s){
                    res += MORSE_TABLE[key]
                }
            }
        }
    }
    return res
}

module.exports = {
    decode
}
