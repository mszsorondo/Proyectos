let range = function (a,b,step){
    let listofnums = []
    if (step == 0)
    {
        step = 1;
    }
    if (a<=b){
       for(i = a ; i<=b ; i+=step){
        listofnums.push(i)
       } 
        return listofnums;
    }
    else
    {
        console.log('a should be greater or equal to b')
    }
}
let range1 = range(1,10, 2);
console.log(range1);

let sum = function(...numbers){
    let result1 = 0;
    for (i of numbers){
        result1+=i;
    }
    return result1;
}

console.log(sum(...range1));