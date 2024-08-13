import { API } from "./servidor.js";

fetch( API + '/bebidas' )
    .then( response => {
        if ( ! response.ok ) {
            throw new Error( 'Erro ao consultar as bebidas' );
        }
        return response.json();
    } )
    .then( mostrarBebidas )
    .catch( mostrarErro );

function mostrarErro( err ) {
    alert( err.message );
}

function mostrarBebidas( bebidas ) {
    const tbody = document.querySelector( 'tbody' );
    removerFilhos( tbody );
    for ( const b of bebidas ) {

        const tr = document.createElement( 'tr' );
        tr.dataset.id = b.id;

        const button = document.createElement( 'button' );
        button.innerText = 'Remover';
        button.addEventListener( 'click', removerBebida );

        const tdBotao = document.createElement( 'td' );
        tdBotao.append( button );

        tr.append( celula( b.id ), celula( b.nome ), celula( b.preco ), tdBotao );
        tbody.append( tr );
    }
}

function celula( conteudo ) {
    const td = document.createElement( 'td' );
    td.innerText = conteudo;
    return td;
}

function removerFilhos( elemento ) {
    while ( elemento.lastChild ) {
        elemento.removeChild( elemento.lastChild );
    }
}

function removerBebida( event ) {

    if ( ! confirm('Deseja mesmo remover?' ) ) {
        return;
    }

    // Pai do botão é a célula. Pai da célula é a linha.
    const tr = event.target.parentElement.parentElement;
    // console.log( tr );
    const id = tr.dataset.id;
    fetch( API + `/bebidas/${id}`, { method: 'DELETE' } )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao remover a bebida' );
            }
        } )
        .then( () => {
            tr.remove();
            alert( 'Removido' );
        } )
        .catch( err => alert( err.message ) );
}