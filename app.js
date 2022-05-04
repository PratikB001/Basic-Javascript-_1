const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAWER WON';
const RESULT_COMPUTER_WINS = 'COMPUTER WON';

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (
        selection!== ROCK &&
        selection!== PAPER &&
        selection!==SCISSORS
        ){
            alert(`Invalid Choice! We have selected ${DEFAULT_USER_CHOICE} for you!`);
            return;
        }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue<0.34){
        return ROCK;
    }else if (randomValue<0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChOice = DEFAULT_USER_CHOICE) => 
    cChoice === pChOice? RESULT_DRAW:
    (cChoice === ROCK && pChOice === PAPER || 
    cChoice === SCISSORS && pChOice === ROCK || 
    cChoice === PAPER && pChOice === SCISSORS)? 
    RESULT_PLAYER_WINS:
    RESULT_COMPUTER_WINS
    // if(cChoice === pChOice){
    //     return RESULT_DRAW;
    // }else if (cChoice === ROCK && pChOice === PAPER || 
    //          cChoice === SCISSORS && pChOice === ROCK || 
    //          cChoice === PAPER && pChOice === SCISSORS) {
    //     return RESULT_PLAYER_WINS;    
    // }else{
    //     return RESULT_COMPUTER_WINS;
    // }

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is Starting ...');
    const playerSelection = getPlayerChoice(); //might not be defined
    const computerChoice = getComputerChoice();
    let winner;
    if(playerSelection){
        winner = getWinner(computerChoice, playerSelection);
    }else{
        winner = getWinner(computerChoice);
    }

    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`;
    if (winner === RESULT_DRAW){
        message = message + ' had a draw';
    }else if(winner === RESULT_PLAYER_WINS){
        message = message + 'won';
    }else{
        message = message + 'lost';
    }
    alert(message);
    gameIsRunning = false;
});