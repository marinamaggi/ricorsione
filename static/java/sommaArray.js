function sommaArray(array) {
  
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sommaArray(array.slice(1));
}

const numeri = [10, 3, 20, 2, 1];
const risultato = sommaArray(numeri);
console.log(risultato); 