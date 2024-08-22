import { Calculadora } from "./calculadora.js";

export class ControladoraCalculo {

    visao;
    calculadora;

    constructor( visao ) {
        this.visao = visao;
        this.calculadora = new Calculadora();
    }

    calcular() {
        const numero1 = this.visao.numero1();
        const numero2 = this.visao.numero2();
        const resultado = this.calculadora.somar( numero1, numero2 );
        this.visao.mostrarResultado( resultado );
    }
}