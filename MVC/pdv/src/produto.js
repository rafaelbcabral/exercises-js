export class Produto {

    /**
     * Cria um produto.
     *
     * @param {number} id
     * @param {string} codigo
     * @param {string} descricao
     * @param {number} estoque
     * @param {number} preco
     */
    constructor(
        id,
        codigo,
        descricao,
        estoque,
        preco
    ) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.estoque = estoque;
        this.preco = preco;
    }
}