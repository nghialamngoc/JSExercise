const xProd = (arr1, arr2) => {
    return arr1.reduce( (pre, i) => {
       return pre.concat(arr2.reduce( (pre2, j) =>{
            return pre2.concat([[i, j]])
        },[])); 
    }, [])
}


console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));


//best way
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));