//Combats shortcomings, Reduces silent errors, Improves performance,
//Provides more warnings, and Fewer unsafe features.
'use strict'

//Need a even handler for the button
//document.querySelector to get the button reference
const switcher = document.querySelector('.btn');

//add the event listener for the click event
switcher.addEventListener('click', function() {
    //The function here is the actual event handler
    document.body.classList.toggle('dark-theme')

    //Update button label with theme
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    //Writing console message will show up in the browser developer tools.
    //helpful for seeing the result of the code
    console.log('current class name: ' + className);
});

document.getElementById("sum").addEventListener("touchstart", displaySum, false);

function displaySum() {
    
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    var sum = new Number(num1) + new Number(num2);
    document.getElementById("sumAns").innerHTML = sum;
    console.log('adding');
}

document.getElementById("sub").addEventListener("click", displayDif);

function displayDif() {

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    var sub = new Number(num1) - new Number(num2);
    document.getElementById("subAns").innerHTML = sub;
    console.log('subtracting');
}

document.getElementById("mul").addEventListener("click", displayMul);

function displayMul() {

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    var mul = new Number(num1) * new Number(num2);
    document.getElementById("mulAns").innerHTML = mul;
    console.log('multiplying');
}

document.getElementById("div").addEventListener("click", displayDiv);

function displayDiv() {

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    var div = new Number(num1) / new Number(num2);
    document.getElementById("divAns").innerHTML = div;
    console.log('dividing');
}

const solve = document.querySelector(".myBtn");

solve.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = Date();
    console.log('Date function');
});

const clear = document.querySelector(".clr");

clear.addEventListener("click", function(){
    
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("sumAns").innerHTML = '';
    document.getElementById("subAns").innerHTML = '';
    document.getElementById("mulAns").innerHTML = '';
    document.getElementById("divAns").innerHTML = '';
    document.getElementById("demo").innerHTML = '';
    console.log('clear function');
});
