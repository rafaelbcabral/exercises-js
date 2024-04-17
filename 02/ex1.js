// 1) Crie uma função chamada paraNome, que receba
// uma string e retorne transformada em PascalCase, isso
// é, com a primeira letra de cada palavra para
// maíscula e as demais em letras minúsculas.
// Exemplo: 'MARIA dA SiLVa' --> 'Maria Da Silva'
/**
 * Retorna uma string em formato de nome.
 *
 * @param {string} texto
 * @returns {string}
 */
function paraNome( texto ) { // 'MARIA dA SiLVa'
    const emMinusculas = texto.toLowerCase(); // 'maria da silva'
    const palavras = emMinusculas.split( ' ' ); // [ 'maria', 'da', 'silva' ]
    const nomes = [];
    for ( let i = 0; i < palavras.length; i++ ) {
        const palavra = palavras[ i ];
        const nome = palavra.charAt( 0 ).toUpperCase() + // 'M'
            palavra.substring( 1 ); // 'aria'
        nomes.push( nome );
    }
    // [ 'Maria', 'Da', 'Silva' ]
    return nomes.join( ' ' ); // 'Maria Da Silva'
}
// console.log( paraNome( 'MARIA  dA  SiLVa ' ) );

// 2) Modifique a função paraNome() para receber um array
// de exceções, que não devem ser consideradas na conversão
// e sempre devem ficar em letras minúsculas.
// Exemplo:
// paraNome( 'MARIA  dA  SiLVa ', [ 'da', 'de' ] )
//      -->  'Maria da Silva'

/**
 * Retorna uma string em formato de nome.
 *
 * @param {string} texto
 * @param {string[]} excecoes
 * @returns {string}
 */
function paraNome2( texto, excecoes ) { // 'MARIA dA SiLVa'
    const emMinusculas = texto.toLowerCase(); // 'maria da silva'
    const palavras = emMinusculas.split( ' ' ); // [ 'maria', 'da', 'silva' ]
    const nomes = [];
    for ( let i = 0; i < palavras.length; i++ ) {
        const palavra = palavras[ i ];
        let encontrouExcecao = false;
        for ( let j = 0; j < excecoes.length; j++ ) {
            const excecao = excecoes[ j ];
            if ( excecao == palavra ) {
                encontrouExcecao = true;
                break;
            }
        }
        const nome = encontrouExcecao
            ? palavra
            : palavra.charAt( 0 ).toUpperCase() + // 'M'
                palavra.substring( 1 ); // 'aria'

        nomes.push( nome );
    }
    // [ 'Maria', 'Da', 'Silva' ]
    return nomes.join( ' ' ); // 'Maria Da Silva'
}

console.log( paraNome2( 'MARIA dA SiLVa ', [ 'da', 'de'] ) );