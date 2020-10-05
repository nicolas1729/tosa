function log(grid){
    console.error("_________________________________");
    for (let y = 0; y<grid.length; y++){
        console.error(`${y} - ${grid[y]}`);
    }
    console.error("---------------------------------");
}


function initGrid(y,x=y){
    let grid = [];
    for (let i = 0; i<y; i++){
        let raw = new Array(x);
        grid.push(raw.fill(0));
    }
    return grid;
}


function pivot(grid){
    let newGrid = initGrid(grid[0].length,grid.length);
    for (let y = 0; y<grid.length; y++){
        for (let x = 0; x<grid[y].length; x++){
            newGrid[x][y] = grid[y][x];
        }
    }
    return newGrid;
}


function getPermutations(array, size) {
    function p(t, i) {
        if (t.length === size) {
            result.push(t);
            return;
        }
        if (i + 1 > array.length) {
            return;
        }
        p(t.concat(array[i]), i + 1);
        p(t, i + 1);
    }

    var result = [];
    p([], 0);
    return result;
}

var array = ['a', 'b', 'c', 'd'];

console.log(getPermutations(array, 2));

