
/*function greet(name) {
console.log('Hellow ' + name);

}
function square(number){
    return number * number;
}

console.log(square(10));
greet('peter');
greet('john');
greet();
*/

let score = JSON.parse(localStorage.getItem
    ('score'))||{ 
        win: 0,
        losses: 0,
        ties: 0
    };

function pickComputerMove(){
    let move =Math.random();
    if(move < 0.33){
        return 'rock'
    } else if(move <0.66 ){
        return 'paper'
    } else {
        return 'scissors'
    }
};

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
});

document.body.addEventListener('keydown', (event)=> {
    if (event.key === 'r') {
        playGame('rock');
    } else if ( event.key === 'p') {
        playGame('paper');
    } else if(event.key === 's') {
        playGame('scissors');
    }
});

function playGame(playerMove){
    let computerMove = pickComputerMove();
    let result;
    console.log(computerMove)
    if(playerMove === 'rock'){
        //console.log('You chose rock and the computer chose '+ computerMove);
        if(computerMove === 'rock'){
            result = 'You tie.'
        } else if(computerMove === 'paper'){
            result = 'You lose.'
        } else {
            result = 'You win.'
        }
    } else if(playerMove === 'paper'){
        //console.log('You chose paper and the computer chose '+ computerMove);
        if(computerMove === 'rock'){
            result = 'You win.'
        } else if(computerMove === 'paper'){
            result = 'You tie.'
        } else{
            result = 'You lose.'
        }
    } else{
        //console.log('You chose scissors and the computer chose '+ computerMove);
        if(computerMove === 'rock'){
            result = 'You lose.'
        } else if(computerMove === 'paper'){
            result = 'You win.'
        } else {
            result = 'You tie.'
        }
    } 
    if(result === 'You win.'){
        score.win ++;
    } else if(result === 'You lose.'){
        score.losses ++;
    } else if(result === 'You tie.'){
        score.ties ++;
    }
    
    document.querySelector('.js-result-text')
        .innerHTML = result;

    document.querySelector('.js-moves-text')
        .innerHTML = `You chose: ${playerMove} Computer chose: ${computerMove}`;
    
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    //document.querySelector('.js-score-text')
    //.innerText = `You played ${playerMove} and the computer played ${computerMove}. ${result}
    //wins: ${score.win} losses: ${score.losses} ties: ${score.ties}`;

    //alert(`You played ${playerMove} and the computer played ${computerMove}. ${result}
    //wins: ${score.win} losses: ${score.losses} ties: ${score.ties}`);

};
let isAutoPlaying = false;
let intervalID;


function autoPlay(){
if (!isAutoPlaying){
    intervalID = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    },1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play').innerHTML = 'stop autoplay';

} else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play').innerHTML = 'Autoplay';
}

}

function subButton(){

    let buttonElement = document.querySelector('.js-sub-button')

    if (buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function updateScoreElement(){
    document.querySelector('.js-score-text')
    .innerText = `Wins: ${score.win}, Losses: ${score.losses}, Ties ${score.ties}`;
}




function doubleArray(nums) {   
    const numsDoubled = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2);
    }
    return numsDoubled;
    
};
console.log(doubleArray([1,1,3,15]));

let todoList = [
{name: 'make dinner',dueDate: '2022-12-22'},
{name: 'wash dishes',dueDate: '2023-01-11'}
];



function renderTodoList(){
    let todoListHTML = '';
    
    todoList.forEach((todoObject, index) => {    
        let { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button"
        >Delete</button>
        `;
        todoListHTML += html;
        
    });
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

   document.querySelectorAll('js-delete-todo-button')
   .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todoList.splice(index,1);
        renderTodoList();
    })
   });

}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addTodo();
});

function addTodo(){
    
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name,dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();

}

renderTodoList();

/*
const function1 = function() {
    console.log('hello2');
};
function1();

const object1 = {
    num: 2,
    fun: function() {
        console.log('hello3');
    }
};
object1.fun();

function display(param) {
    console.log(param);
}
display(2);

function run(param){
    param();
}

run(function() {
    console.log('hello4');
});

setTimeout(function() {
    console.log('timeout');
},0);

console.log('yo');

setInterval(function() {
    console.log('interval');
}, 3000);


[
    'make food',
    'wash cloths',
    'eat'
].forEach(function(value, index){

    if(value === 'wash cloths'){
        return;
    }
    console.log(index);
    console.log(value);
});


const arrowFunction = () => {
    console.log('hello');
};
arrowFunction();

const oneParam = param => {
    console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2+3;
console.log(oneLine());

const object2 = {
    method: () => {

    },
    method(){

    }
}


const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
    console.log('click');
};

buttonElement.addEventListener('click',
eventListener());


buttonElement.removeEventListener('click',
eventListener());

buttonElement.addEventListener('click',() => {
    console.log('click2');
});
*/


console.log([1, -3, 5].filter((value, index) =>{
    /*
    if(value >= 0 ){
        return true;
    } else
    return false; 
    */
    return value >= 0;
}));

console.log([1, 1, 3].map((value, index) =>{
    return value * 2;
}));

console.log([1, 1, 3].map(value => value * 2 ));