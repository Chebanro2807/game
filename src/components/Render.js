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
                    break
            }
            markup = markup + '<div class="item"><img class="picture" src='+srcImg+'></div>'
        });
        markup = markup + '</div>'
    });
    return markup
}

export default render
