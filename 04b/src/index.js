// console.log(
//     document.querySelector( 'table' )
// );

import { criarConta, contas, calcularSaldo } from "./contas.js";

document.addEventListener( "DOMContentLoaded", function() {
    document.getElementById( 'adicionar' ).onclick = adicionar;
    desenharContas( contas );
} );

function adicionar( event ) {
    console.log( event );
    const descricao = document.getElementById( 'descricao' ).value;
    const tipo = document.getElementById( 'tipo' ).value;
    let valor = document.getElementById( 'valor' ).value;
    valor = parseFloat( valor );
    if ( isNaN( valor ) ) {
        alert( 'Por favor, informe um número.' );
        document.getElementById( 'valor' ).focus();
        return;
    }
    const conta = criarConta( descricao, tipo, valor );
    adicionarNaTabela( conta );
    definirRodape( calcularSaldo() );
};


function desenharContas( contas ) {
    for ( let conta of contas ) {
        adicionarNaTabela( conta );
    }
    definirRodape( calcularSaldo() );
}

function adicionarNaTabela( conta ) {
    document.querySelector( 'tbody' ).innerHTML +=
        `<tr>
            <td>${conta.id}</td>
            <td>${conta.descricao}</td>
            <td>${conta.tipo}</td>
            <td>${formatarValor( conta.valor )}</td>
        </tr>`;
}

function formatarValor( valor ) {
    // return valor.toFixed( 2 ); // TO-DO: melhorar
    const options = { style: 'currency',
        currencyDisplay: 'symbol', currency: 'BRL' };
    const numberStr = new Intl.NumberFormat(
        'pt-BR', options ).format( valor );
    return numberStr;
}

function definirRodape( saldo ) {
    let classe = '';
    if ( saldo < 0 ) {
        classe = 'negativo';
    } else if ( saldo > 0 ) {
        classe = 'positivo';
    }
    document.querySelector( 'tfoot' ).innerHTML =
        `<tr>
            <td colspan="3" ></td>
            <td class="${classe}" >${formatarValor( saldo )}</td>
        </tr>`;
}
