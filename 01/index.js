
/**
 * Transforma um texto qualquer em letras minúsculas.
 *
 * @param {string} nome Nome qualquer
 * @returns
 */
function paraMinusculas( nome ) {
    return nome.toLowerCase();
}

let cidades = [
    'Nova Friburgo', 'Bom Jardim', 'Cordeiro'
];

cidades.push( 'Cantagalo' );

console.log( paraMinusculas.length + "teste");

const idade = 21;

const cliente = {
    nome: 'Maria',
    telefone: '398348349',
    "endereco": '...',
    descricao: `Mulher, ${idade} anos`
};

console.log( cliente ); // Maria
console.log( cliente[ 'nome' ] ); // Maria

