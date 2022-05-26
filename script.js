// Targeting Selectors

const displayEleValue = document.getElementById('screen');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
//Selecting the buttons with all the 10 digits (0-9)
const btnNumbers = document.getElementsByClassName('btn-number');
//Selecting the four operators (add/subtract/divide/multiply) and the equals operators
const btnOperators = document.getElementsByClassName('btn-operator');


// variables created for holding our temporaty values
const displayVal = "0";
const pendingVal;
const evalStringArray = [];

// adding event listeners for all number buttons and by looping through them
for(let i = 0; i < btnNumbers.length; i++){
    btnNumbers[i].addEventListeners('click', );
}

