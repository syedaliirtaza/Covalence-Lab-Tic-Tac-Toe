let win = document.querySelector('.winner');
let cells = document.querySelectorAll('.row > div');

//we can add event listener to an individual index of an array
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click',cellClicked, {once: true});
}

//def a variable for game over as well
let gameOver = 0;
//check for which player's turn it is
let Player = 0;
function isEven(Player)
{
    return Player % 2 == 0;
}
function cellClicked()
{
    if (gameOver == 1) {
        gameReload();
    } else if (isEven(Player)) {
        Player++;
        event.target.textContent = 'X';
        checkrow();
    } else {
        Player++;
        event.target.textContent = 'O';
        checkrow();
        
    }
}

//now check for win
function checkrow()
{
    let row1 = cells[0].textContent + cells[1].textContent + cells[2].textContent;
    let row2 = cells[3].textContent + cells[4].textContent + cells[5].textContent;
    let row3 = cells[6].textContent + cells[7].textContent + cells[8].textContent;
    let column1 = cells[0].textContent + cells[3].textContent + cells[6].textContent;
    let column2 = cells[1].textContent + cells[4].textContent + cells[7].textContent;
    let column3 = cells[2].textContent + cells[5].textContent + cells[8].textContent;
    let diagonal1 = cells[0].textContent + cells[4].textContent + cells[8].textContent;
    let diagonal2 = cells[2].textContent + cells[4].textContent + cells[6].textContent;


    let playerWin = [row1,row2,row3,column1,column2,column3,diagonal1,diagonal2];
    for ( let j = 0;j< playerWin.length;j++)
    {
        if (playerWin[j] === 'XXX') {
            gameOver++;
            win.textContent = 'X wins [click me to reload]'
            gameReload();
        } else if (playerWin[j] === 'OOO') {
            gameOver++;
            win.textContent = 'O wins [click me to reload]'
            gameReload();
        }
    }
}

// reset the game and draw check

if (Player == 9 && gameOver == 0) {
    win.textContent = 'Game Draw [click me to reload]';
    gameReload();
}
function gameReload(){
    win.addEventListener('click',reload)
}
function reload()
{
    window.location.reload();
    
}
