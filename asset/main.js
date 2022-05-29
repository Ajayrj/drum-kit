alert('Welcome, to Drum kit');
//click event
$('.drum').click(function(){
let clickedButton = this.innerHTML;
switchForDrumSound(clickedButton);
buttonAnimation(clickedButton);
});

//keypress event
$(document).keypress(function(e){
let pressedKey = e.key;
console.log(pressedKey);
switchForDrumSound(pressedKey);
buttonAnimation(pressedKey);
});

//button animation
function buttonAnimation(currentKey){
        let activeButton = $('.'+currentKey);
        activeButton.addClass('pressed');
    setTimeout(function(){
        activeButton.removeClass('pressed');
    },100);
}

//swith for sound
function switchForDrumSound(buttonChar){
    switch (buttonChar) {
        case 'f':
            let crash = new Audio('asset/sounds/crash.mp3');
            crash.play();
        break;
        case 's':
            let tom1 = new Audio('asset/sounds/tom-1.mp3');
            tom1.play();
        break;
        case 'd':
            let tom2 = new Audio('asset/sounds/tom-2.mp3');
            tom2.play();
        break;
        case 'a':
            let tom3 = new Audio('asset/sounds/tom-3.mp3');
            tom3.play();
        break;
        case 'j':
            let tom4 = new Audio('asset/sounds/tom-4.mp3');
            tom4.play();
        break;
        case 'k':
            let kick = new Audio('asset/sounds/kick-bass.mp3');
            kick.play();
        break;
        case 'l':
            var snare = new Audio('asset/sounds/snare.mp3');
            snare.play();
        break; 
        default:
            console.log(this.innerHTML);
        break;
    }
}