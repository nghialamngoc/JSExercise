const differenceBy = ( arr1, arr2, fn) => {
    
    var result = arr1.filter( x => !arr2.reduce( (pre, y) => {
               console.log(pre, x, y)
                if (fn(y) === fn(x))
                    return pre = true;
               return pre;
            }, false)
            
    )

    return result;
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));