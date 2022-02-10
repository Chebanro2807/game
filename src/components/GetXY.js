function getXY(arr){
    let x = 0;
    let y = 0;
    arr.forEach((row, indexRow)=>{
        row.forEach((column, indexColumn)=>{
            if (column === 3){
                x = indexRow;
                y = indexColumn
            }
        })
    })
    return [x,y]
}

export default getXY
