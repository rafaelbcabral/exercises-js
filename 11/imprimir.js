function imprimir( [ n1, , n3 ] ) {
    console.log( n1, n3 );
}

imprimir( [ 'Banana', 'Maçã', 'Pêra', 'Laranja', 'Amora' ] );


function imprimirApos2( [ , , ...restante ] ) {
    console.log( ...restante );
}

imprimirApos2( [ 'Banana', 'Maçã', 'Pêra', 'Laranja', 'Amora' ] );