import { API } from './servidor.js';

document.getElementById( 'salvar' ).addEventListener( 'click', async ev => {
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

    try {
        const response = await fetch( API + '/bebidas', opcoes )

        if ( ! response.ok ) {
            throw new Error( 'Erro ao salvar a bebida.' );
        }
        location.href = 'bebidas.html';
        alert( 'Salvo' );
    } catch ( err ) {
        alert( err.message );
    }
} );