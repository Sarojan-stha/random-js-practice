
function generatePassword(length,includeUpperCase,includeLowerCase,includeNumbers,includeSymbols){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const symbols = "~!@#$%^&*()_+"
    
    let allowedChars = "";
    let password = "";
    let randomIndex;

    allowedChars += includeUpperCase?  upperCase:"";
    allowedChars += includeLowerCase?  lowerCase:"";
    allowedChars += includeNumbers?  numbers:"";
    allowedChars += includeSymbols?  symbols:"";

    for(let i=0;i<length;i++){
        randomIndex = Math.floor(Math.random()*allowedChars.length)+1;
        password += allowedChars[randomIndex];
    }
    console.log(`Generated password is :${password}`);

    
    
}

const length = 5;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;
generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);