const keys = document.querySelector('.calculator-keys') as HTMLElement; //select the element with class 'calculator-keys'
const display = document.querySelector('.calculator-screen') as HTMLInputElement; //to receive inputs from the user to the calculator screen

//declaring variables to get the previous input, current input and the operator which will be used for the calculation
let previousInput = '';
let currentInput = '0';
let operator = '';

//to add the event listener for the calculator keys
keys.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement; //to get the clicked target element
    const value = target.value; //get the value of the clicked button as written int he html code

    //switch cases to hanlde each case
    switch(value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value); //to handle all the operators
            break;
        case '=':
            calculate(); //to calculate the numbers and the operator entered by the user
            break;
        case 'all-clear':
            clear(); //to clear the values along with the outputs of the early calcualtions
            break;
        default:
            handleNumbers(value); //to handle numbers
            break;
    }
    updateDisplay(); //to update the displau
})

function handleOperator(value: string) {
    if(operator !== '') { //if the operator is not null, then shoukd follow the calcualte method
        calculate();
    }
    previousInput = currentInput; //previousInput will get the value of the currentInput 
    currentInput = '0'; //currentInput will be equal to 0
    operator = value; //operator will be equal to the cliked button's value
}

function calculate() { //the calculate funxtion
    let result = 0; //desclating result
    let num1 = parseFloat(previousInput); //declaring num1 for th calculation
    let num2 = parseFloat(currentInput); //declaring num2 for the calculation

    switch(operator) { //switch cases to handle each operator
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    currentInput = result.toString(); //currentInput will get the value of the reuslt
    operator = ''; //operator will fo null
    previousInput = ''; //previousInput will go null
}

function clear() { //clear everything entered from the calculator
    previousInput = ''; //previousInput will be null
    currentInput = '0'; //currentInput will be 0
    operator = ''; //operator will be null
}

function handleNumbers(value: string) { //to handle the numbers 
    if(currentInput === '0') {  //if the currentInput is equal to 0
        currentInput = value; //the currentInput will get hte value of value
    } else { //otherwsie
        currentInput += value; //append the new number to the current inptu
    }
}

function updateDisplay() { //function to update the display
    display.value = currentInput; //update the display with the currentInput
}