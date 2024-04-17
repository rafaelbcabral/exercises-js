export const produtos = [
    { "descricao": "Água Mineral 1,5L", "preco": 6.50, "estoque": 20 },
    { "descricao": "Coca-cola 2L", "preco": 8.50, "estoque": 50 },
    { "descricao": "Minerinho 2L", "preco": 8.00, "estoque": 10 },
];

export function desenharProdutos( produtos ) {
    const corpo = document.querySelector( 'tbody' );
    const max = produtos.length; // 3
    for ( let i = 0; i < max; i++ ) { // 0..2
        const p = produtos[ i ];
        const linha = '<tr>' +
            '<td>' + p.descricao + '</td>' +
            '<td>' + p.preco + '</td>' +
            '<td>' + p.estoque + '</td>' +
            '</tr>';
        corpo.innerHTML += linha;
    }
}