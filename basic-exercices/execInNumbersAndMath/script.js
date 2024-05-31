const numero = Number(prompt('Digite um número: ')); // Number para envolver e fazer contas com o número.
const numeroTitulo = document.getElementById('numero-titulo'); // seleciona o elemento.
const texto = document.getElementById('texto'); // seleciona o elemento.

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada deste número: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p> arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> com duas casas decimais: ${numero.toFixed(2)} </p>`;




