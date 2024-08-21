import { API } from "./servidor.js";

async function main() {
    try {
        const response = await fetch( API + '/bebidas' );
        if ( ! response.ok ) {
            throw new Error( 'Erro ao consultar as bebidas' );
        }
        const bebidas = await response.json();
        mostrarBebidas( bebidas );
    } catch ( err ) {
        mostrarErro( err.message );
    }
}
main();

function mostrarErro( err ) {
    alert( err.message );
}

function mostrarBebidas( bebidas ) {
    const tbody = document.querySelector( 'tbody' );
    removerFilhos( tbody );
    for ( const b of bebidas ) {

        const tr = document.createElement( 'tr' );
        tr.dataset.id = b.id;

        const botaoRemover = document.createElement( 'button' );
        botaoRemover.innerText = '❌';
        botaoRemover.addEventListener( 'click', removerBebida );

        const botaoAlterar = document.createElement( 'button' );
        botaoAlterar.innerText = '📝';
        botaoAlterar.addEventListener( 'click', alterarBebida );

        const tdBotao = document.createElement( 'td' );
        tdBotao.append( botaoRemover, botaoAlterar );

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

async function removerBebida( event ) {

    if ( ! confirm('Deseja mesmo remover?' ) ) {
        return;
    }

    // Pai do botão é a célula. Pai da célula é a linha.
    const tr = event.target.parentElement.parentElement;
    // console.log( tr );
    const id = tr.dataset.id;

    try {
        const response = await fetch( API + `/bebidas/${id}`, { method: 'DELETE' } )
        if ( ! response.ok ) {
            throw new Error( 'Erro ao remover a bebida' );
        }
        tr.remove();
        alert( 'Removido' );
    } catch ( err ) {
        alert( err.message );
    }
}

// window.removerBebida = removerBebida;

function alterarBebida( event ) {
    // Pai do botão é a célula. Pai da célula é a linha.
    const tr = event.target.parentElement.parentElement;
    const id = tr.dataset.id;
    location.href = 'alterar.html?id=' + id;
}