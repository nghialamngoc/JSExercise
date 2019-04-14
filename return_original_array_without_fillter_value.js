const pull = (array, ...specifiedValues) => {
    array.reduce((arr, x) => {
        if(specifiedValues.indexOf(x) > 0)
            return arr;
        return arr.concat(x);
    }, [])
}


let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));