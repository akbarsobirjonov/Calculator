//Function to show the characters in input
function appendCharacter(character) {
    document.getElementById("result").value += character;
}

//Function to delete the last character in input
function deleteLastCharacter() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

//Function to clear the all characters in input
function clearResult() {
    document.getElementById("result").value = "";
}

//Function to show the result in input
function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}
