const aritmeticaSimples = (...numbers) => (numbers.reduce((total, numero) => total + numero, 0)) / numbers.length;

console.log(` Média aritmética simples: ${aritmeticaSimples(10, 10, 10)}`)

const mediaPonderada = (...numbers) => {
  let somaNP = 0;
  let somaP = 0;

  numbers.forEach(objeto => {
    somaNP += (objeto.n * objeto.p);
    somaP += objeto.p;
  });
  return somaNP / somaP;
}

console.log(`Média Ponderada: ${mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })}`);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)