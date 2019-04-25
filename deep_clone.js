const deepClone = (obj) => {
    var a = Array.isArray(obj) ? [] : {} ;
    for(let i in obj){
        var x = typeof(obj[i]) === 'Object' ? deepClone(obj[i]) : obj[i];
        a = a.concat(x);
    }
    return a;
}

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b)