
const rename_keys = (objKeys, obj) => {
    return Object.keys(obj).reduce( (result, key) => ({
        ...result,
        [ objKeys[key] || key ] : obj[key]
    }), {})
}

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);