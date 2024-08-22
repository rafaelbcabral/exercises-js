import { Calculadora } from "./calculadora.js";
import { VisaoCalculadora } from "./visao-calculadora.js";

export class ControladoraCalculo {

    visao;
    calculadora;

    constructor() {
        this.visao = new VisaoCalculadora();
        this.calculadora = new Calculadora();
    }

    iniciar() {
        this.visao.aoDispararCalcular( this.calcular.bind( this ) );
        // this.visao.aoDispararCalcular( () => this.calcular() )
        // this.visao.aoDispararCalcular( this.calcular )
    }

    calcular() {
    // calcular = () => {
        const numero1 = this.visao.numero1();
        const numero2 = this.visao.numero2();
        const resultado = this.calculadora.somar( numero1, numero2 );
        this.visao.mostrarResultado( resultado );
    };
}