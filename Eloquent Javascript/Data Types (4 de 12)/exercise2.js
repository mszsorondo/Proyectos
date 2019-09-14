let reverseaarray = function(arr){
    let newarr = [];
    for (i of arr){
        newarr.unshift(i);
    }
    return newarr;
} 
console.log(reverseaarray([1,2,3,4,5]))

/* mal hecho...
let reverseArrayInPlace = function(arr){
    let max = arr.length;
    for(i = 0 ; i <= max ; i++){
        let current = arr[-1];
        arr.unshift(current);
        arr.pop();
        
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]))
*/
//por el autor...
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
