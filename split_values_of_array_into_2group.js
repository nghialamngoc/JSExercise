const bifurcate = ( arr1 = [], arr2) => {
    var result1;
    var result2 = [];
    result1 = arr1.filter( (x, index) => {
        if(arr2[index] === true){        
            return x;
        }
        result2.push(x);
            
    })

    return [result1, result2];
}

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));


//solution 2 

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));
