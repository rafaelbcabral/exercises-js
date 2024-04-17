// EXERCÍCIO 1
// Mova as funções e variáveis de contato.html para este
// arquivo, declarando-as no formato EcmaScript Modules (ESM).
// Então, em contato.html, importe as funções e as utilize.

export let telefones = [];

export function enviar() {
    const nome = document.getElementById( 'nome' ).value;
    const contato = {
        nome: nome,
        telefones: telefones
    };
    const json = JSON.stringify( contato );
    console.log( json );
    const contato2 = JSON.parse( json );
    console.table( contato2 );
}

export default function adicionar() {
    const campoTelefone = document.getElementById( 'telefone' );
    const telefone = campoTelefone.value;

    const div = document.getElementsByTagName( 'div' )[ 0 ];
    div.innerText = ''; // Limpa a mensagem
    const tamanho = telefone.length;
    if ( tamanho < 9 || tamanho > 11 ) {
        div.innerText = 'Telefone com tamanho incorreto';
        return; // Sai
    }

    telefones.push( telefone );

    const select = document.querySelector( 'select' );
    const opcao = '<option>' + telefone + '</option>';
    select.innerHTML += opcao;
    campoTelefone.value = '';
    campoTelefone.focus();
}