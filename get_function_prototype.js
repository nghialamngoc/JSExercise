const functions = (obj, inherited = false) => {
    return (inherited ? 
            [ ...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))] : [...Object.keys(obj)])
      .filter(x => typeof(obj[x]) === 'function');
}

function Foo() {
    this.a = () => 1;
    this.b = () => 2;
    this.d = 4;
}

Foo.prototype.c = () => 3;
console.log(functions(new Foo()));
console.log(functions(new Foo(), true));
