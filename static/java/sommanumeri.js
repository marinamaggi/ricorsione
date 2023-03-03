function sommanumeri(n1, n2) {
  if (n1 === n2) {
    return n1; 
  } else {
    return n1 + sommanumeri(n1 + 1, n2); 
  }
}

// esempio di utilizzo
let somma = sommanumeri(1, 100);
console.log(somma);