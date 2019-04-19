const customCoalesce = (...arr) => arr.find( x => Boolean(x));
console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));

//cach khac
// coalesceFactory = valid => {
//     return (...args) => args.find(valid);
// }
// hàm coalesceFactory là 1 high order function 
// khi customCoalesce gọi đến hàm này nó sẽ truyền 1 call back function (closure)
const coalesceFactory = valid => (...args) => args.find(valid);
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));