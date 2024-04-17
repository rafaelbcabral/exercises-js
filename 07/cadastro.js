import { validarDados } from "./validacao.js";

document.addEventListener('DOMContentLoaded', iniciar);

function iniciar(){
  document.getElementById('salvar').addEventListener('click', adicionar);
}

function adicionar( event ){
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  const erros = validarDados(nome, altura, peso);

  if(erros.length > 0){
    for(const erro of erros){
      alert(erro);
    }
    return;
  }

  const atleta = {nome: nome, altura: altura, peso: peso};
  const atletas = [];
  atletas.push(atleta);
  localStorage.setItem('itens', JSON.stringify(atletas));
  alert('salvo com sucesso!');
  location.href = "atletas.html";
}
