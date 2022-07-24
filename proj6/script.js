function getHistory() {
    return document.getElementById('history-value').innerText
}

function printHistory(num){
    document.getElementById('history-value').innerText = num;
}


function getOutput() {

    return document.getElementById('output-value').innerText
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function printOutput(num){
    if (num=="") {
        document.getElementById('output-value').innerText =num;
    }
    else{

        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}



let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',function(){
        if (this.id=='clear') {
            printHistory("");
            printOutput("");
        }
        else if (this.id=='backspace') {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output!=''){
                
                history = history+output;
                if (this.id=='=') {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("")
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }


            }
        }
    })
    
}
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click',function() {
       var output = reverseNumberFormat(getOutput());
        if (output!=NaN) {
            output += this.id;
            printOutput(output);
        }
    })
    
}