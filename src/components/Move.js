import render from './Render'

function moveRight([x,y],array,parrent) {
    const countColumns = array[0].length;
    if(array[x][y+1] !== 1){
        if (y < countColumns - 1) {
            array[x][y] = 0;
            array[x][y + 1] = 3;
            parrent.innerHTML = render(array);
        }
    }
}

function moveLeft([x,y],array,parrent) {
    const countColumns = array[0].length;
    if(array[x][y-1] !== 1){
        if (y > 0) {
            array[x][y] = 0;
            array[x][y - 1] = 3;
            parrent.innerHTML = render(array);
        }
    }
}

function moveDown([x,y],array,parrent) {
    const countRows = array.length;
    if (x < countRows - 1){
        if (array[x+1][y] !== 1){
            array[x][y] = 0;
            array[x + 1][y] = 3;
            parrent.innerHTML = render(array);
        }
    }
}

function moveUp([x,y],array,parrent) {
    const countRows = array.length;
    if (x > 0) {
        if (array[x-1][y] !== 1){
            array[x][y] = 0;
            array[x - 1][y] = 3;
            parrent.innerHTML = render(array);
        }
    }
}

export {moveRight,moveLeft,moveDown,moveUp}
