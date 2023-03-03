function trovaMinimo(array) {
  if (array.length === 1) {
    return array[0];
  }

  const restoArray = array.slice(1);
  const minimoResto = trovaMinimo(restoArray);
  return Math.min(array[0], minimoResto);
}

const numeri = [55, 5, 23, 43, 65];
const minimo = trovaMinimo(numeri);
console.log(minimo); 