//adding event listeners to all buttons

let numOfDrums = document.querySelectorAll('.drum').length

//detecting button press

for(let i = 0; i <numOfDrums; i++ ){ // this gives array remember??
    document.querySelectorAll(".drum")[i].addEventListener('click', handleClick)
}


function handleClick() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press

document.addEventListener('keydown', keypress)

function keypress (KeyboardEvent){

    makeSound(KeyboardEvent.key);

    buttonAnimation(KeyboardEvent.key)
}

function makeSound(key){

    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3'); // these are constructor functions
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;


        default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector('.'+ currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100)

}
// this
// returns  <button class="w drum">w</button> or whatever u attach the event listener to