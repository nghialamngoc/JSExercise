const getValue = (data, target) => {
    var output, v;
    for (let key in data) {
        v = data[key];

        output = key === target ? data[key] : typeof (v) === "object" ? getValue(v, target) : undefined;

    }
    return output;
}

const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
};


const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

console.log(getValue(data, 'level3'));
console.log(getValue(data, 'level4'));
console.log(getValue(dog, 'message'));


//solution 2:


const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));