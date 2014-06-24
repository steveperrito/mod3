var grid = [
    ["o","o","o"],
    ["","",""],
    ["","",""]
];

grid.forEach(function(row){
    checkHorRow(row);
});

transposeVertToHorizontal(grid).forEach(function(row){
    checkHorRow(row);
});

transposeDiag(grid).forEach(function(row){
    checkHorRow(row);
});


function checkHorRow(row){
    var val = row[0];
    var passed = 0;
    row.forEach(function(cell){
        if(cell == val) passed = passed + 1;
    });
    if(passed == 3 && val != "") {
        console.log("There's a winner");
    } else {
        console.log("There's no winner");
    }
}

function transposeVertToHorizontal(grid){
    return [
        [grid[0][0], grid[1][0], grid[2][0]],
        [grid[0][1], grid[1][1], grid[2][1],
        [grid[0][2], grid[1][2], grid[2][2]]]]


}

function transposeDiag (grid) {
    return [
        [grid[0][0], grid [1][1], grid[2][2]],
        [grid[0][2], grid[1][1], grid[2][0]]
    ]
}