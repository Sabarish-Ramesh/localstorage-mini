var user_guess_num= document.getElementById("user-guessed-num");
var btn = document.getElementById('btn');
var score = document.getElementById('score');
var tof = document.getElementById('tof');
var ul = document.getElementById('ul');
var totalscore = 10

var historylist = JSON.parse(localStorage.getItem("scoredetails"))||[]
if (!localStorage.getItem("scoredetails")) {
    score.innerHTML = "";
    tof.innerHTML = "";
} else {
    history();
}



function check(){
    var rand_data = Math.floor(Math.random()*10)+1;
    var data = user_guess_num.value;
    if (isNaN(data) || data < 1 || data > 10) {
        tof.textContent = "Please enter a number between 1 and 10.";
        return;
    }
    if(data == rand_data)
    {
     tof.textContent = "true";
     alert('you guessed correct');
     addscore(totalscore); 
     score.textContent = "score:"+10;
     user_guess_num.value = '';
    }
    else
    {
        if(totalscore==0){
            alert('Game over! You have used all your guesses.');
            btn.disabled = true;
        }
        totalscore= totalscore-1;
        score.textContent="score:"+totalscore;
        tof.textContent = "false";
    }
}

function reset(){
    localStorage.clear()
    ul.innerHTML=""
}

function addscore(score){
    var time = new Date().toLocaleString()
    historylist.push({score:score,date:time});
    localStorage.setItem("scoredetails",JSON.stringify(historylist));
    history();
}

function history(){
    ul.innerHTML=''
    historylist.forEach((i)=>{
        var li = document.createElement('li');
        li.textContent = `score:${i.score} ,time:${i.date}`;
        ul.appendChild(li);
    })
}



score.textContent = "score:"+totalscore;
