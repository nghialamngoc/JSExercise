const countBy = (arr = [], fn) => {
    return arr.reduce( (pre, x) => {
        var a = typeof(fn) === 'function' ? fn(x) : x[fn];
        if ( pre[a] === undefined )
            pre[a] = 1;
        else
            pre[a] = pre[a] + 1;
        
        return pre;

    }, {})
}

console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(['one', 'two', 'three'], 'length'));

// or

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(['one', 'two', 'three'], 'length'));