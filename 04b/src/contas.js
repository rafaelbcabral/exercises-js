
// Tenta carregar do localStorage
export let contas = localStorage.getItem( 'contas' );
if ( contas === null ) { // Não existe
    contas = []; // Vazio
} else {
    contas = JSON.parse( contas ); // Transforma em Array
}

// Carrega o contador do localStorage
let contadorContas = localStorage.getItem( 'contador' );
if ( contadorContas === null ) { // Não existe
    contadorContas = 0;
} else {
    contadorContas = JSON.parse( contadorContas );
}

export function criarConta( descricao, tipo, valor ) {
    const conta = {
        descricao: descricao,
        tipo: tipo,
        valor: valor,
        id: ++contadorContas
    };
    contas.push( conta );
    localStorage.setItem( 'contas', JSON.stringify( contas ) );
    localStorage.setItem( 'contador', contadorContas );
    return conta;
}

export function calcularSaldo() {
    let saldo = 0;
    for ( const conta of contas ) {
        if ( conta.tipo == 'P' ) { // P = Pagar
            saldo += conta.valor * -1;
        } else { // R = Receber
            saldo += conta.valor;
        }
    }
    return saldo;
}