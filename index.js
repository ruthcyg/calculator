function display(value){
    document.getElementById("textarea").value+= value;
}

function calculate(){
    const value = document.getElementById("textarea").value;
    let answer = eval(value);
    document.getElementById("textarea").value = answer;
}

function clr(){
    document.getElementById("textarea").value = " ";
}