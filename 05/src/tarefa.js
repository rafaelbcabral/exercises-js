let id = 0;
export let tarefas = [];

export function criarTarefa( descricao ) {
    const tarefa = {
        id: ++id,
        descricao: descricao,
        feita: false
    };
    tarefas.push( tarefa );
    return tarefa;
}

export function trocarFeitaPeloId( id ) {
    for ( const tarefa of tarefas ) {
        if ( tarefa.id == id ) { // Encontrou
            tarefa.feita = ! tarefa.feita;
            return tarefa.feita;
        }
    }
}

export function removerTarefaNoIndice( indice ) {
    tarefas.splice( indice, 1 );
}