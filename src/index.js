const array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
let gameBlock = document.getElementById("game");

let x = 0;
let y = 0;
let stamina = true;
function checkStamina() {
    stamina = false;
    if (!stamina){
        setTimeout(()=>{
            stamina = true;
        },2000)
    }
}

function render(field){
    let markup = '';
    field.forEach((row, indexRow) => {
        markup = markup + '<div class="row">'
        row.forEach((column, indexColumn) => {
            let srcImg;
            switch (column){
                case 0: srcImg = 'img/grass.png'
                    break
                case 1: srcImg = 'img/tree.png'
                    break
                case 3:
                    srcImg = 'img/walk.png';
                    x = indexRow;
                    y = indexColumn;
                    break
            }
            markup = markup + '<div class="item"><img class="picture" src='+srcImg+'></div>'
        });
        markup = markup + '</div>'
    });
    return markup
}
gameBlock.innerHTML = render(array);

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowRight') {
        arrowRight();
    }
    if (event.code === 'ArrowLeft') {
        arrowLeft();
    }
    if (event.code === 'ArrowDown') {
        arrowDown();
    }
    if (event.code === 'ArrowUp') {
        arrowUp();
    }
});

function arrowRight() {
    const countColumns = array[0].length;
    if(array[x][y+1] !== 1 && stamina){
        if (y < countColumns - 1) {
            array[x][y] = 0;
            array[x][y + 1] = 3;
            checkStamina();
            gameBlock.innerHTML = render(array);
        }
    }
}

function arrowLeft() {
    const countColumns = array[0].length;
    if(array[x][y-1] !== 1 && stamina){
        if (y > 0) {
            array[x][y] = 0;
            array[x][y - 1] = 3;
            checkStamina();
            gameBlock.innerHTML = render(array);
        }
    }
}

function arrowDown() {
    const countRows = array.length;
    if (x < countRows - 1){
        if (array[x+1][y] !== 1 && stamina){
            array[x][y] = 0;
            array[x + 1][y] = 3;
            checkStamina();
            gameBlock.innerHTML = render(array);
        }
    }
}

function arrowUp() {
    const countRows = array.length;
    if (x > 0) {
        if (array[x-1][y] !== 1 && stamina){
            array[x][y] = 0;
            array[x - 1][y] = 3;
            checkStamina();
            gameBlock.innerHTML = render(array);
        }
    }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

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
            arrowLeft()
        } else {
            arrowRight()
        }
    } else {
        if ( yDiff > 0 ) {
            arrowUp()
        } else {
            arrowDown()
        }
    }
    xDown = null;
    yDown = null;
};
