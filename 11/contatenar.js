// Número 1

function concatenar( arr1, arr2 ) {
    return [ ...arr1, ...arr2 ];
}

console.log( concatenar( [ 10, 20 ], [ 30, 40 ] ) );

// Número 2

function concatenar2( ...arrays ) {
    const novoArray = [];
    for ( const atual of arrays ) {
        novoArray.push( ...atual );
    }
    return novoArray;
}

console.log(
    concatenar2( [ 10, 20 ], [ 30, 40 ], [ 50, 60, 70 ] )
);