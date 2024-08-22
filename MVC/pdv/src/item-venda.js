export class ItemVenda {
    produto;
    quantidade;

    constructor( produto, quantidade ) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    subtotal() {
        return this.produto.preco * this.quantidade;
    }

    incrementarQuantidade( valor ) {
        this.quantidade += valor;
    }
}