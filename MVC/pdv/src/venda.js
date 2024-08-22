import { ItemVenda } from "./item-venda.js";

export class Venda {

    itens = [];

    async consultarProduto( codigo ) {
        const response = await fetch( 'src/produtos.json');
        if ( ! response.ok ) {
            throw new Error( 'Produto não encontrados.' );
        }
        const produtos = await response.json();
        return produtos.find( p => p.codigo === codigo ) || null;
    }

    /**
     * Adiciona o item na venda e o retorna.
     *
     * @param {string} codigo
     * @returns {ItemVenda}
     */
    async adicionarProduto( codigo ) {
        const produto = await this.consultarProduto( codigo );
        if ( ! produto ) {
            return null;
        }
        // Procura o item dentro da venda
        let itemVenda = this.itens.find( item => item.produto.codigo === codigo );
        if ( ! itemVenda ) {
            itemVenda = new ItemVenda( produto, 1 );
            this.itens.push( itemVenda );
        } else {
            itemVenda.incrementarQuantidade( 1 );
        }
        return itemVenda;
    }

    total() {
        let valor = 0;
        for ( const item of this.itens ) {
            valor += item.subtotal();
        }
        return valor;
    }

    quantidadeItens() {
        return this.itens.length;
    }
}