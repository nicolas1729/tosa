input = [
    "10 8",
    "2 9",
    "9 3",
    "3 7",
    "7 4",
    "9 6",
    "9 1",
    "1 8",
    "10 5"
];

main(input);

function main(input){
    
    let [nb, ...data] = input;
    let grid = init(data);
    let result = convert(grid);

    let result2={};
    let max = 0;
    let resp = 0;
    for (var j in result) {
        let se = new Set(result[j]);
        let ar = [...se];
        result2[j]=ar.length;
        
        if(ar.length>max){
            max = ar.length;
            resp=j;
        }
    }
    
    console.log(result2);
    console.log(resp);

}


function convert(grid){
    let result = {};
    for (let i = 0; i<grid.length; i++){
        let noeud = String(grid[i].key);
        let maj = String(grid[i].value);
        if(result[noeud] != undefined){
            result[noeud].push(maj);
        }else{
            result[noeud] = [maj];
        }
        for (var j in result) {
            if(result[j].includes(noeud)){
                result[j].push(maj);
            }
            if(result[noeud].includes(j)){
                result[noeud].push(...result[j]);
            }
            console.log(result[j]);
        }
    }

    return result;
}

function init(data){
    grid = [];
    data.forEach((elt,idx) => {
        let [un, deux] = elt.split(" ");
        let obj = {key:parseInt(un), value:parseInt(deux)}
        grid.push(obj);
    });

    grid.sort((a,b)=>{
        return a.key-b.key;
    });
    return grid;
}