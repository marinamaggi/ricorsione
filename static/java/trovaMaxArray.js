function trovaMassimo(array) {
  if (array.length === 1) {
    return array[0];
  }

  const restoArray = array.slice(1);
  const massimoResto = trovaMassimo(restoArray);
  return Math.max(array[0], massimoResto);
}

const numeri = [55, 5, 23, 43, 65];
const massimo = trovaMassimo(numeri);
console.log(massimo); 