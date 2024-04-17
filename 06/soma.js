// const somar = ( ...valores ) => {
//     let soma = 0;
//     for ( let v of valores ) {
//         soma += v;
//     }
//     return soma;
// }

function somar() {
    let soma = 0;
    for ( let v of arguments ) {
        soma += v;
    }
    return soma;
}

console.log( somar( 10, 20 ) );
console.log( somar( 10, 20, 30, 40, 50, 60 ) );
console.log( somar( 10 ) );
console.log( somar( 0 ) );