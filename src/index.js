const array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function render(field){
    let markup = '';
    field.forEach((row) => {
        markup = markup + '<div class="row">'
        row.forEach((item) => {
            let srcImg;
            switch (item){
                case 0: srcImg = 'img/grass.png'
                    break
                case 1: srcImg = 'img/tree.png'
                    break
                case 3: srcImg = 'img/walk.png'
                    break
            }
            markup = markup + '<div class="item"><img class="picture" src='+srcImg+'></div>'
        });
        markup = markup + '</div>'
    });
    return markup
}
document.getElementById("game").innerHTML = render(array);
