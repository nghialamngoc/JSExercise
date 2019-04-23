const coalesce = (...args) => {
    return args.find( _ => ![ null, undefined].includes(_));
}
console.log(coalesce(null, undefined, '', NaN, 'abcd'));