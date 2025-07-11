const display = document.getElementById('display')

function appendToDisplay(input){
display.value += input
}

function calculate(){
display.value = eval(display.value)
}

function clearDisplay(){
display.value = '';

}

function deleteLast(){
    display.value= display.value.slice(0,-1)
}