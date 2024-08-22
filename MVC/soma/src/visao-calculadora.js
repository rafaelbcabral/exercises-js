export class VisaoCalculadora {

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

    // Eventos

    aoDispararCalcular( funcao ) {
        document.querySelector( 'button' )
            .addEventListener( 'click', ev => {
                ev.preventDefault();
                funcao();
            } );
    }

}