const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // (condition) ? 'Value to true' : 'Value to false'
console.log(nivelUsuario);

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'; // if usuario not selector color in overview, the color is a black automatically

console.log(nivelUsuario, corPadrao);
