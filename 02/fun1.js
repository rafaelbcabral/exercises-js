/**
 * Calcula a potência de um número.
 *
 * @param {number} base Base da potência
 * @param {number} expoente Expoente
 * @returns {number}
 */
function potencia( base, expoente ) {
    return Math.pow( base, expoente );
}

const pot = function( b, e ) {
    return Math.pow( b, e );
};

function calcular( x, y, funcao ) {
    console.log( 'Vai calcular...' );
    return funcao( x, y );
}

console.log( calcular( 10, 20, pot ) );

potencia( 'a', 10 );
