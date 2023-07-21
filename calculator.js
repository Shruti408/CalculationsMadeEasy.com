// declare consts for mainscreens
let screen1 = document.getElementById("mainscreen");
let result_screen = document.getElementById("resultscreen");

// to clear the mainscreen 
function clearAll() {
    screen1.innerHTML = '';
    result_screen.innerHTML = '';
}

// to backspace single key 
function backspace() {
    if (screen1.innerHTML !== '') {
        screen1.innerHTML = screen1.innerHTML.substring(0, screen1.innerHTML.length - 1);
    }
}

// on clicking the number button 
function click_event(digit) {
    if (screen1.innerHTML[screen1.innerHTML.length - 1] !== '√'){
        screen1.innerHTML = screen1.innerHTML + digit;
    }
    compute();
}

// on clicking the operand button
function click_operand(opt) {
    if (result_screen.innerHTML !== '') {
        screen1.innerHTML = result_screen.innerHTML;
        result_screen.innerHTML = '';
    }
    if (screen1.innerHTML !== '') {
        if (screen1.innerHTML[screen1.innerHTML.length - 1] === '+' || screen1.innerHTML[screen1.innerHTML.length - 1] === '-' || screen1.innerHTML[screen1.innerHTML.length - 1] === '*' || screen1.innerHTML[screen1.innerHTML.length - 1] === '/' || screen1.innerHTML[screen1.innerHTML.length - 1] === '%') {
            screen1.innerHTML = screen1.innerHTML.substring(0, screen1.innerHTML.length - 1);
        }
        screen1.innerHTML += opt;
    }
    if(opt === '√'){
        compute();
    }
}

// to compute the value 
function compute() {
    let ans = '';
    //to add the two numbers
    if (screen1.innerHTML.includes('+') === true) {
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('+')));
        let num2 = parseFloat(screen1.innerHTML.slice(screen1.innerHTML.indexOf('+') + 1, screen1.innerHTML.length));
        ans = num1 + num2;

    } else //to subtract the two numbers 
    if (screen1.innerHTML.includes('-') === true) {
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('-')));
        let num2 = parseFloat(screen1.innerHTML.slice(screen1.innerHTML.indexOf('-') + 1, screen1.innerHTML.length));
        ans = num1 - num2;

    } else //to multiply the two numbers 
    if (screen1.innerHTML.includes('*') === true) {
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('*')));
        let num2 = parseFloat(screen1.innerHTML.slice(screen1.innerHTML.indexOf('*') + 1, screen1.innerHTML.length));
        ans = num1 * num2;

    } else //to divide the two numbers  
    if (screen1.innerHTML.includes('/') === true) {
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('/')));
        let num2 = parseFloat(screen1.innerHTML.slice(screen1.innerHTML.indexOf('/') + 1, screen1.innerHTML.length));
        ans = num1 / num2;

    } else //to find the mode of two numbers  
    if (screen1.innerHTML.includes('%') === true) {
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('%')));
        let num2 = parseFloat(screen1.innerHTML.slice(screen1.innerHTML.indexOf('%') + 1, screen1.innerHTML.length));
        ans = num1 % num2;

    }else // to find the square-root of a number 
    if(screen1.innerHTML.includes('√') === true){
        let num1 = parseFloat(screen1.innerHTML.slice(0, screen1.innerHTML.indexOf('√')));
        ans = Math.sqrt(num1);
    }
    result_screen.innerHTML = ans;
}
