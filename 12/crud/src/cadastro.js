import { API } from './src/servidor.js';

document.getElementById( 'salvar' ).addEventListener( 'click', ev => {
    ev.preventDefault();

    const bebida = {
        nome: document.getElementById( 'nome' ).value,
        preco: Number( document.getElementById( 'preco' ).value ),
    };

    const opcoes = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( bebida )
    };
    fetch( API + '/bebidas', opcoes )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao salvar a bebida.' );
            }
            alert( 'Salvo' );
            location.href = 'bebidas.html';
        } )
        .catch( err => alert( err.message ) );
} );