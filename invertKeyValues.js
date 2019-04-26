const invertKeyValues = (obj, fn) => {
    return Object.keys(obj).reduce( (pre, key) => {
        var preKey = fn ? fn(obj[key]) : obj[key];        
        if (!pre[preKey])
            pre[preKey] = [];
        pre[preKey] = pre[preKey].concat(key)       
        return pre;
    },{})
}

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value));