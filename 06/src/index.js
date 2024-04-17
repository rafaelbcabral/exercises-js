import tarefas from './tarefas.js';

document.addEventListener( 'DOMContentLoaded', () => {
    listar( tarefas );
    document.getElementById( 'pesquisar' )
        .addEventListener( 'click', pesquisar );
} );

const listar = tarefas => {
    const tbody = document.querySelector( 'tbody' );
    while ( tbody.hasChildNodes() ) {
        tbody.firstChild.remove();
    }
    // Outra forma:
    // while ( tbody.firstChild ) {
    //     tbody.removeChild( tbody.firstChild );
    // }

    const frag = document.createDocumentFragment();
    tarefas.forEach( ( t, posicao ) => {
        const linha = criarLinha( t, posicao + 1 );
        frag.append( linha );
    } );
    tbody.appendChild( frag );
};

const criarLinha = ( tarefa, posicao ) => {
    const tr = document.createElement( 'tr' );
    const indice = tr.appendChild( document.createElement( 'td' ) );
    indice.innerText = posicao;
    const descricao = tr.appendChild( document.createElement( 'td' ) );
    descricao.innerText = tarefa.descricao;
    const feita = tr.appendChild( document.createElement( 'td' ) );
    feita.innerText = tarefa.feita ? '✔' : '-';

    const botaoRemover = tr.appendChild(
        document.createElement( 'button' ) );
    botaoRemover.innerText = '❌';
    botaoRemover.addEventListener( 'click', removerLinha );

    return tr;
};

const pesquisar = event => {
    event.preventDefault();
    const texto = document.getElementById( 'pesquisa' ).value;
    if ( ! texto ) {
        listar( tarefas );
        return;
    }
    const filtradas = tarefas.filter( t => t.descricao.includes( texto ) );
    listar( filtradas );
};

const removerLinha = ( event ) => {
    const tr = event.target.parentElement;
    const indice = tr.sectionRowIndex;
    console.log( indice );
    tarefas.splice( indice, 1 ); // Remove das tarefas
    tr.remove(); // Remove da tela
};