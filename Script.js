var button=document.getElementById("button");
var grid_item=document.getElementById("grid__item");
var markers=["X","O"];
var turn=0;
var players=[];
var gameOver=false;
players[0]="Player1";
players[1]="Player2";
var scores=[0,0];
var winValues=[7,56,73,84,146,273,292,448]; 

alert("This is a game of Tic-Tac-Toe where the following symbols are assigned by default\nPlayer1: X \nPlayer2: O")

function startGame(grid_item,divValue)
{
    if(!gameOver)
    {
        scores[turn] += divValue;
        grid_item.onclick="";
        grid_item.innerHTML="<span>" + markers[turn] + "</span>";
        winCheck();
        if(!gameOver)
        {
            toggle();
        }
    }
}

function toggle()
{
    if(turn==0) turn=1;
    else turn=0;
    document.getElementById("head").innerText=players[turn] + "'s turn";
}

function winCheck()
{
    for(var i=0 ; i<winValues.length ; i++)
    {
        if((scores[turn] & winValues[i]) == winValues[i])
        {
            document.getElementById("head").innerText=players[turn] + " Wins!"
            gameOver=true;
        } 
    }
    if((scores[0]+scores[1]==511) && !gameOver)
    {
        document.getElementById("head").innerText = "Draw";
        gameOver=true;
    }
}

function refreshPage()
{
    window.location.reload();
} 

