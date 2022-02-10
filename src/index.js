import CheckStamina from './components/Stamina'
import getXY from './components/GetXY'
import {moveRight,moveLeft,moveDown,moveUp} from './components/Move'
import render from './components/Render'

const array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
let gameBlock = document.getElementById('game');
let [x,y] = getXY(array)
let stamina = true;
gameBlock.innerHTML = render(array);

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowRight' && stamina) {
        moveRight(getXY(array),array,gameBlock);
        stamina = false;
        CheckStamina(stamina).then((check)=> {stamina = check})
    }
    if (event.code === 'ArrowLeft' && stamina) {
        moveLeft(getXY(array),array,gameBlock);
        stamina = false;
        CheckStamina(stamina).then((check)=> {stamina = check})
    }
    if (event.code === 'ArrowDown' && stamina) {
        moveDown(getXY(array),array,gameBlock);
        stamina = false;
        CheckStamina(stamina).then((check)=> {stamina = check})
    }
    if (event.code === 'ArrowUp' && stamina) {
        moveUp(getXY(array),array,gameBlock);
        stamina = false;
        CheckStamina(stamina).then((check)=> {stamina = check})
    }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', ()=>{
    moveDown(getXY(array),array,gameBlock)
}, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            moveLeft(getXY(array),array,gameBlock)
        } else {
            moveRight(getXY(array),array,gameBlock)
        }
    } else {
        if ( yDiff > 0 ) {
            moveUp(getXY(array),array,gameBlock)
        }
    }
    xDown = null;
    yDown = null;
};
