// var obj = {
//     name: "Nghia",
//     age: 25
// }

// function Person(){
//     this.name = "Nghia";
//     this.age = 18;
// }

// Person.show = function(){
//     console.log('a')
// }

// Person.prototype.show2 = function(){
//     console.log('b')
// }

// Object.defineProperty(obj, "hobbies", {
//     value: "play game", 
// })

// var person = new Person();

// console.log(Person)

// console.log(obj.hasOwnProperty("hobbies"));

var matches = (obj, source) => {``    
    return Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
}

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false