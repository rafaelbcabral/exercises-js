const livros = [
  { titulo: "1984", autor: "George Orwell", ano: 1949 },
  { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen", ano: 1813 }
];

const livrosMap = livros.map(l => `Título: ${l.titulo}\nAno: ${l.ano}`);

console.log(livrosMap.join('\n\n'));
