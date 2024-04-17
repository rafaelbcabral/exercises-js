// Crie uma função entreMinMax que receba um array,
// um valor mínimo e um valor máximo e retorne um novo
// array contendo apenas os elementos entre o mínimo e
// o máximo indicados, incluindo eles. Exemplo:
// entreMinMax( [ 1, 2, 3, 4, 5, 6 ], 2, 5 )  // [ 2, 3, 4, 5 ]

const entreMinMaxAntigo = ( array, min, max ) => {
    let novo = [];
    for ( const e of array ) {
        if ( e >= min && e <= max ) {
            novo.push( e );
        }
    }
    return novo;
};

const entreMinMax = ( array, min, max ) => {
    return array.filter( e => e >= min && e <= max );
};

const entreMinMax2 = ( array, min, max ) =>
    array.filter( e => e >= min && e <= max );

console.log(
    entreMinMax( [ 1, 2, 3, 4, 5, 6 ], 2, 5 )
);