import { criarTarefa, removerTarefaNoIndice, tarefas, trocarFeitaPeloId } from "./tarefa.js";

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
    document.getElementById( 'adicionar' )
        .addEventListener( 'click', adicionar );

    document.getElementById( 'remover' )
        .addEventListener( 'click', remover );
}

function adicionar( event ) {
    event.preventDefault(); // Evita enviar form
    const descricao = document.getElementById( 'descricao' ).value;
    const tarefa = criarTarefa( descricao );
    adicionarNaTabela( tarefa );
}

function remover( event ) {
    const linha = document.querySelector( '.selecionada' );
    const indice = linha.sectionRowIndex; // exibir o index da linha
    console.log( indice );
    removerTarefaNoIndice( indice );
    linha.remove();
}

function adicionarNaTabela( tarefa ) {
    document.querySelector( 'tbody' ).innerHTML +=
        `<tr>
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td data-id="${tarefa.id}"
                >${tarefa.feita ? 'Sim' : 'Não'}</td>
        </tr>`;

    const celulasColunaFeita = document.querySelectorAll(
        'tbody tr td:nth-child(3)' );
    for ( const feita of celulasColunaFeita ) {
        feita.addEventListener( 'dblclick', trocarFeita );
    }

    const linhas = document.querySelectorAll( 'tbody tr' );
    for ( const linha of linhas ) {
        linha.addEventListener( 'click', trocarSelecao );
    }
}

function trocarSelecao( event ) {
    const linha = event.target.parentElement;
    linha.classList.toggle( 'selecionada' ); // on/off
}

function trocarFeita( event ) {
    const celula = event.target;
    const id = celula.dataset.id;
    console.log( id );
    const feita = trocarFeitaPeloId( id );
    celula.innerText = feita ? 'Sim' : 'Não';
}