const converge = (a, b) => (...args) => {
    return a( ...b.map(x => x.apply(null, args)) )
}

const average = converge((a, b) => a / b, [
    arr => arr.reduce((a, v) => a + v, 0),
    arr => arr.length
  ]);
  console.log(average([ 6, 7]));
  console.log(average([1, 2, 3, 4, 5, 6, 7]));