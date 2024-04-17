// EXERCÍCIO 2
// a) Crie uma função palindromo() que receba duas strings
// e retorne true se a primeira for igual à segunda ao
// contrário. Exemplo:
// palindromo( 'socorram', 'marrocos' ) // true

// b) Crie uma função gerarStringAleatoria() que receba
// o número desejado de caracteres e retorne uma string com
// caracteres aleatórios com esse tamanho.
// Para gerar os caracteres, utilize a função Math.random()
// e mantenha o código dos caracteres dentro da faixa que
// vai de 32 à 127.
// Exemplo:
// gerarStringAleatoria( 5 ) --> 'a%4b!'
// A função Math.random() gera um número pseudo-aleatório
// entre 0 e 1.

/**
 * Retorna `true` se os textos são palíndromos.
 *
 * @param {string} texto1
 * @param {string} texto2
 * @returns {boolean}
 */
function palindromo( texto1, texto2 ) {
    // let inversa = '';
    // for ( let i = texto1.length - 1; i >= 0; i-- ) {
    //     inversa += texto1[ i ]; // texto1.charAt( i )
    // }
    // 'marrocos'
    const separados = texto1.split( '' ); // [ 'm', 'a', 'r', ... ]
    const inverso = separados.reverse(); // [ 's', 'o', ...]
    const unidoInverso = inverso.join( '' );
    // return unidoInverso == texto2;
    return unidoInverso.toLowerCase() == texto2.toLowerCase();
    // Em uma linha
    // return texto1.toLowerCase()
    //     .split( '' )
    //     .reverse()
    //     .join( '' ) == texto2.toLowerCase();
}
console.log( palindromo( 'Socorram', 'Marrocos' ) );

/**
 * Retorna uma certa quantidade de caracteres aleatórios
 * entre 32 e 127.
 *
 * @param {number} quantidade
 * @returns {string}
 */
function gerarStringAleatoria( quantidade ) {
    let texto = '';
    for ( let i = 0; i < quantidade; i++ ) {
        const numero = aleatorio( 32, 127 );
        texto += String.fromCharCode( numero );
    }
    return texto;
}

function aleatorio( min, max ) {
    return min + Math.trunc( Math.random() * (max - min) );
}

console.log( gerarStringAleatoria( 5 ) );