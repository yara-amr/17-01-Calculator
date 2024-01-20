function display(val) {
    document.getElementById("text").value += val;
}
function clearinput() {
    document.getElementById("text").value = " ";
}
function calculate(){
    let input = document.getElementById("text").value;
    let result = eval(input);
    document.getElementById("text").value = result;
}