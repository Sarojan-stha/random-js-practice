


function generatePassword(){
   
    let pwLength = document.getElementById("pwLength").value;
    const includeLowerCase = document.getElementById("includeLowerCase");
    const includeUpperCase = document.getElementById("includeUpperCase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const generatePw = document.getElementById("generatePw");
    const showPw = document.getElementById("showPw");

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const symbols = "~!@#$%^&*()_+"

    pwLength = parseInt(pwLength);
    
    let allowedChars = "";
    let password = "";
    let randomIndex;

    allowedChars += includeUpperCase.checked?  upperCase:"";
    allowedChars += includeLowerCase.checked?  lowerCase:"";
    allowedChars += includeNumbers.checked?  numbers:"";
    allowedChars += includeSymbols.checked?  symbols:"";

    if(pwLength<=0){
       return alert(`The length of character must be at least 1`);

    }
    if(allowedChars.length===0){
       return alert(`please choose at least one type of characters`);        
    }

    for(let i=0;i<pwLength;i++){
        randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }

    showPw.innerHTML = `Generated Password is :`+ password
}


