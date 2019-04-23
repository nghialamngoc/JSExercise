const group_By = (array= [], fn) => {
  
    return array.map( x => typeof(fn) === 'function' ? fn(x) : x[fn]).reduce( (pre, a, index) => {
    
        if (pre[a] === undefined)
            pre[a] = [array[index]];
        else
          pre[a] = pre[a].concat(array[index])
          
        return pre;
          
      }, {})
}

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));

/* result :
    {"2.4698178070456938":[6.1],"2.04939015319192":[4.2],"2.5099800796022267":[6.3]}
    {"4":[4.2],"6":[6.1,6.3]}
    {"3":["one","two"],"5":["three"]} 
*/