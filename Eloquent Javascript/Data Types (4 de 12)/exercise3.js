function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  //this works because the rest property is equalled to list as defined with a null value

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
//at each iteration node is equal to the list inserted, node has to be true, the array is pushed the value inside...
//...and node ends up being its rest property that as well contains a list until that is no longer true

function prepend(value, list) {
    return {value, rest: list};
  }
//takes a value of a greater list and adds the previous one to the grater's rest

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

//takes a list and an n that references the index
// if list is false then return undefined 
//if n is zerp return list.value
//else re run the code with the rest of the list and evaluate it with one less than n
let o1 = {
    prop1 : 1,
    prop2 : false
}
let o2 = {
    prop1 : 1,
    prop2 : false
}
function deepEqual(v1, v2){
    if (typeof(v1) == typeof(v2) && typeof(v1)!='object'){
        return(v1==v2? true:false);
    } 
    else if (typeof(v1) != typeof(v2))
    {
        return false;
    }
    else{

        for (i = 0 ; i<=v1.length-1 ; i++){
            v1.keys(i) == v2.keys(i);
            if (v1.v1.keys(i)==v2.v2.keys(i)){
                return true;
            }
            else{
                return false;
            }
        }
            
    }
}
console.log(deepEqual(o1,o2))
  