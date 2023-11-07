const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
let start = document.getElementById("start");
let text = document.getElementById("text");
const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

for (i in buttons){
    buttons[i].disabled = true;
}

function hide_start(){
    start.style.opacity = 0;
    text.style.opacity = 0;
    start.style.top = "2000px";
    for (i in buttons){
        buttons[i].style.opacity = 1;
        buttons[i].disabled = false;
    }
}

let game_going = true;

let turn = "O";

function check_win(){
    if (button1.textContent == button2.textContent && button2.textContent == button3.textContent && button3.textContent != ""){
        game_going = false;
        return 
    }
    else if (button1.textContent == button4.textContent && button4.textContent == button7.textContent && button7.textContent != ""){
        game_going = false;
        return 
    }
    else if (button1.textContent == button5.textContent && button5.textContent == button9.textContent && button9.textContent != ""){
        game_going = false;
        return 
    }
    else if (button2.textContent == button5.textContent && button5.textContent == button8.textContent && button8.textContent != ""){
        game_going = false;
        return 
    }
    else if ( button3.textContent == button6.textContent && button6.textContent == button9.textContent && button9.textContent != ""){
        game_going = false;
        return 
    }
    else if (button4.textContent == button5.textContent && button5.textContent == button6.textContent && button6.textContent != ""){
        game_going = false;
        return 
    }
    else if (button7.textContent == button8.textContent && button8.textContent == button9.textContent && button9.textContent != ""){
        game_going = false;
        return 
    }
    else if (button3.textContent == button5.textContent && button5.textContent == button7.textContent && button7.textContent != ""){
        game_going = false;
        return 
    }
}



function change_text(button){
    if (game_going){
    if (button.textContent != "O"){
        if (button.textContent != "X"){
                if (turn == "O"){
                    button.textContent = "O";
                    turn = "X";
                }
                else if (turn == "X"){
                    button.textContent = "X";
                    turn = "O";
                }
            }
        }
    }
}

button1.onclick = function(){
    change_text(button1);
}


button2.onclick = function(){
    change_text(button2);
}


button3.onclick = function(){
    change_text(button3);
}


button4.onclick = function(){
    change_text(button4);
}


button5.onclick = function(){
    change_text(button5);
}


button6.onclick = function(){
    change_text(button6);
}


button7.onclick = function(){
    change_text(button7);
}


button8.onclick = function(){
    change_text(button8);
}


button9.onclick = function(){
    change_text(button9);
}

window.setInterval(check_win,60);