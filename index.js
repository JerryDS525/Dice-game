// heading.innerHTML = 'good bye';
// heading.style.color = 'red';
// document.getElementById('test_1').style.color="green";
// document.getElementsByClassName('list').style.color="green";
// document.querySelector("h1").style.color="red";


// function refreshPage(){
    // window.location.reload();
    
    randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6);
    randomNumber1 = randomNumber1 + 1;

    randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6);
    randomNumber2 = randomNumber2 + 1;

    if (randomNumber1>randomNumber2){
        document.querySelector(".winner_1").innerHTML='<i class="fas fa-flag f_color"></i> Player 1 Wins!';
    }
    else if (randomNumber1<randomNumber2){
        document.querySelector(".winner_1").innerHTML='Player 2 Wins! <i class="fas fa-flag f_color"></i>';
    }
    else if (randomNumber1===randomNumber2){
        document.querySelector(".winner_1").innerHTML='It\'s a Draw';
    }

    document.querySelector(".img1").setAttribute("src",("images/dice"+randomNumber1+".png"));
    document.querySelector(".img2").setAttribute("src",("images/dice"+randomNumber2+".png"));

// }

function changePlayerNames(){
    var player1 = prompt("Type player 1 name: ");
    var player2 = prompt("Type player 2 name: ");

    document.querySelector(".play_1").innerHTML=player1;
    document.querySelector(".play_2").innerHTML=player2;
}