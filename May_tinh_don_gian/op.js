function setscreen() {
    document.getElementById('screen').value += value
}
function  cal(){
    let input = document.getElementById('screen').value
    let result = eval(input)
    document.getElementById('screen').value = result
}
function clearscreen(){
    document.getElementById('screen').value = ""
}