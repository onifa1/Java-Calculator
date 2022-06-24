//show a prompt to user to input an equation
//get the user's equation
let firstnum = displayToEnterNum1()

let operator = displayToEnterOperator()

let secondnum = displayToEnterNum2()

//use prompt to show the user the result
alert(`Your answer is ${answer}`)

function addition(num1, num2){
    return num1 + num2
}
function subraction(num1, num2){
    return num1 - num2
}
function division(num1, num2){
    return num1 / num2
}
function multiplication(num1, num2){
    return num1 * num2
}
function displayToEnterNum1(){
    return window.prompt("Put in the first number")
}
function displayToEnterOperator(){
    return window.prompt("put in the arithmetic sign")
}
function displayToEnterNum2(){
    return window.prompt("Put in the second number")
}