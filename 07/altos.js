const AtletasJson = localStorage.getItem('itens') || [];
const Atletas = JSON.parse(AtletasJson);

const atletasFiltrados = Atletas.filter(atleta => atleta.altura > 1.90);

for(const atletas of atletasFiltrados){
  const tr = document.createElement('tr');
  const nome = tr.appendChild(document.createElement('td'));
  nome.innerText = atletas.nome;
  const altura = tr.appendChild(document.createElement('td'));
  altura.innerText = atletas.altura;
  const peso = tr.appendChild(document.createElement('td'));
  altura.innerText = atletas.peso;
  document.querySelector('tbody').appendChild(tr);
}

let pesoTotal = Number(0);
for(const atleta of Atletas){
  pesoTotal += Number(atleta.peso);
}

let mediaPeso = pesoTotal / Atletas.length;

let MaiorAltura = Number(0);
for(const atleta of atletasFiltrados){
  if(MaiorAltura < atleta.altura){
    MaiorAltura = Number(atleta.altura);
  }
}

const tdMediaPeso = document.querySelector('tfoot tr td:nth-child(2)');
const tdMaiorAltura = document.querySelector('tfoot tr td:nth-child(3)')
tdMediaPeso.innerText = mediaPeso.toFixed(2);
tdMaiorAltura.innerText = MaiorAltura.toFixed(2);


