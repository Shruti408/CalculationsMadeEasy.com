// declare consts for mainscreens
let screen1 = document.getElementById("mainscreen");
let screen2 = document.getElementById("mainscreen2");
let screen3 = document.getElementById("mainscreen3");
let screen4 = document.getElementById("mainscreen4");
let screen5 = document.getElementById("mainscreen5");

// to clear the mainscreen 
function clearAll() {
    screen1.innerHTML = ' ';
    screen2.innerHTML = ' ';
    screen3.innerHTML = ' ';
    screen4.innerHTML = ' ';
    screen5.innerHTML = ' ';
}

// to backspace single key 
function backspace() {
    
    if(screen5.innerHTML !== ' '){
            screen5.innerHTML = screen5.innerHTML.substring(0, screen5.innerHTML.length-1);
    }else        
        if (screen3.innerHTML !== ' ') {
            screen3.innerHTML = screen3.innerHTML.substring(0, screen3.innerHTML.length-1);      
    }else
        if(screen1.innerHTML !== ' '){
            screen1.innerHTML = screen1.innerHTML.substring(0, screen1.innerHTML.length-1);
    }      
}


// on clicking the number button 
function click_event(digit) {

    if(screen5.innerHTML !== ' '){
        screen5.innerHTML = screen5.innerHTML + digit;
    }else
    if(screen2.innerHTML !== ' '){
        screen3.innerHTML = screen3.innerHTML + digit;         
    }else{
        screen1.innerHTML = screen1.innerHTML + digit; 
    }
}

// on clicking the operand button
function click_operand(opt){
    if(screen5.innerHTML !== ' '){
        screen1.innerHTML = screen5.innerHTML;
        screen4.innerHTML = ' ' ;
        screen5.innerHTML = ' ' ;
    }
    if(screen1.innerHTML !== ' ') {
        screen2.innerHTML = opt;
    }
}

// to compute the value 
function compute(){
    let ans = ' ';
    //to add the two numbers
    if(screen2.innerHTML === '+'){
        ans = parseInt(screen1.innerHTML) + parseInt(screen3.innerHTML);
    }else
    //to subtract the two numbers
    if(screen2.innerHTML === '-'){
        ans = screen1.innerHTML - screen3.innerHTML;
    }else
    //to multiply the two numbers 
    if(screen2.innerHTML === '*'){
         ans = screen1.innerHTML * screen3.innerHTML;
    }else
    //to divide the two numbers 
    if(screen2.innerHTML === '/'){
        ans = screen1.innerHTML / screen3.innerHTML;
    }else
    //to find the mode of two numbers 
    if(screen2.innerHTML === '%'){
        ans = screen1.innerHTML % screen3.innerHTML;
    }else
    // to find the square-root of a number 
    if(screen2.innerHTML === '√'){
        ans = Math.sqrt(screen1.innerHTML);
    }
    screen1.innerHTML = ' ';
    screen2.innerHTML = ' ';
    screen3.innerHTML = ' '; 
    screen4.innerHTML = '=';
    screen5.innerHTML = ans;
}
