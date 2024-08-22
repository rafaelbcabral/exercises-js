import { ControladoraCalculo } from './controladora-calculo.js';

export class VisaoCalculadora {

    controladora;

    constructor() {
        this.controladora = new ControladoraCalculo( this );
    }

    iniciar() {
        document.querySelector( 'button' )
            .addEventListener( 'click', ev => {
                ev.preventDefault();
                this.controladora.calcular();
            } );
    }

    // Entradas

    /** @returns number */
    numero1() {
        return Number( document.getElementById( 'n1' ).value );
    }

    /** @returns number */
    numero2() {
        return Number( document.getElementById( 'n2' ).value );
    }

    // Saídas

    /** @param {number} valor */
    mostrarResultado( valor ) {
        document.getElementById( 'resultado' ).innerText = String( valor );
    }

}