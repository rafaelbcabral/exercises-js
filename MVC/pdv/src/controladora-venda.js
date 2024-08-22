import { Venda } from "./venda.js";
import { VisaoVenda } from "./visao-venda.js"; // TODO: comentar

export class ControladoraVenda {

    /**
     *
     * @param {VisaoVenda} visao
     */
    constructor( visao ) {
        this.visao = visao;
        this.venda = new Venda();
    }

    async consultarProduto() {
        const codigo = this.visao.codigoProduto();
        const produto = await this.venda.consultarProduto( codigo );
        this.visao.mostrarProduto( produto );
    }

    async adicionarProduto() {
        const codigo = this.visao.codigoProduto();
        const item = await this.venda.adicionarProduto( codigo );
        if ( ! item ) {
            return;
        }
        if ( item.quantidade > 1 ) {
            this.visao.desenharItens( this.venda.itens );
        } else {
            this.visao.adicionarNovoItem( item );
        }
        this.visao.mostrarTotalizacoes(
            this.venda.total(), this.venda.quantidadeItens() );
    }
}