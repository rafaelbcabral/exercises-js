// console.log(
//     document.querySelector( 'table' )
// );

import { criarConta, contas } from "./contas.js";

document.addEventListener( "DOMContentLoaded", function() {

    document.getElementById( 'adicionar' ).onclick =
        function adicionar() {
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
        };

    desenharContas( contas );
} );


function desenharContas( contas ) {
    for ( let conta of contas ) {
        adicionarNaTabela( conta );
    }
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
    return valor.toFixed( 2 ); // TO-DO: melhorar
}

