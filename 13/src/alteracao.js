import { API } from "./servidor.js";

async function main() {
    const params = new URLSearchParams( location.search );
    const id = params.get( 'id' );
    if ( ! id ) {
        alert( 'Por favor, forneça um id na URL.' );
        location.href = 'bebidas.html';
    }
    console.log( id );

    try {
        const response = await fetch( API + '/bebidas/' + id );
        if ( response.status == 404 ) { // Not Found
            throw new Error( 'Bebida não encontrada.' );
        } else if ( response.status >= 400 ) {
            throw new Error( 'Erro ao consultar a bebida' );
        }
        const bebida = await response.json();
        mostrarBebida( bebida );
    } catch ( err ) {
        alert( err.message );
        return;
    }

    document.querySelector( '#salvar' )
        .addEventListener( 'click', salvarBebida );
}

main();

function mostrarBebida( { id, nome, preco } ) {
    document.getElementById( 'id' ).value = id;
    document.getElementById( 'nome' ).value = nome;
    document.getElementById( 'preco' ).value = preco;
}

async function salvarBebida( event ) {
    event.preventDefault();

    const bebida = {
        id: document.getElementById( 'id' ).value,
        nome: document.getElementById( 'nome' ).value,
        preco: Number( document.getElementById( 'preco' ).value )
    };

    try {
        const opcoes = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( bebida )
        };
        const response = await fetch( API + '/bebidas/' + bebida.id, opcoes );
        if ( ! response.ok ) {
            throw new Error( 'Erro atualizando a bebida.' );
        }
    } catch ( err ) {
        alert( err.message );
    }
    location.href = 'bebidas.html';
    alert( 'Salvo.' );
}