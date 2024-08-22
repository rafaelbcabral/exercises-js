import { ControladoraVenda } from "./controladora-venda.js";
import { Produto } from "./produto.js";

export class VisaoVenda {

    constructor() {
        this.controladora = new ControladoraVenda( this );
    }

    iniciar() {
        document.getElementById( 'produto' )
            .addEventListener( 'blur', ev => { // Ao sair do input
                ev.preventDefault();
                this.controladora.consultarProduto();
            } );

        document.getElementById( 'adicionar' )
            .addEventListener( 'click', ev => { // Ao sair do input
                ev.preventDefault();
                this.controladora.adicionarProduto();
            } );
    }

    // Entradas

    codigoProduto() {
        return document.getElementById( 'produto' ).value;
    }

    // Saídas

    /** @param {Produto|null} p */
    mostrarProduto( p ) {
        const info = document.getElementById( 'info' );
        if ( !p ) {
            info.innerText = 'Produto não encontrado.';
            return;
        }
        console.log( p );
        info.innerText = `${p.descricao} - ${this.formatarValor(p.preco)}`;
    }

    mostrarTotalizacoes( totalVenda, quantidadeItens ) {
        document.getElementById( 'qtdItens' ).innerText = String( quantidadeItens );
        document.getElementById( 'total' ).innerText = this.formatarValor( totalVenda );
    }

    adicionarNovoItem( item ) {
        document.querySelector( 'tbody' ).innerHTML +=
            `<tr>
                <td></td>
                <td>${item.produto.codigo}</td>
                <td>${item.produto.descricao}</td>
                <td>${item.quantidade}</td>
                <td>${this.formatarValor( item.subtotal() )}</td>
            </tr>
            `;
    }

    desenharItens( itens ) {
        document.querySelector( 'tbody' ).innerHTML = '';
        itens.forEach( item => this.adicionarNovoItem( item ) );
    }

    formatarValor( valor ) {
        return 'R$ ' + Number( valor ).toFixed( 2 ).replace( '.', ',' );
    }
}