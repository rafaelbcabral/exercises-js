// arrays
//               0       1        2
const alunos = ['luiz', 'maria', 'joao'];

console.log(alunos.slice(0, 3)); //buscando elementos até o 2, no caso, maria.
console.log(alunos[2]); //acessar o indice 

alunos.unshift('luiza'); // adiciona no inicio.
alunos.push('pedro'); //adiciona no fim.

const removido = alunos.pop(); // remove no final.
const removido2 = alunos.shift(); //remove no inicio.

console.log (alunos instanceof Array); // para verificar se essa const é um array.



