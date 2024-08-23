function criarJogador(jogador) {
  const opcoes = {
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(jogador)
  };

  fetch(API, opcoes)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error('Não foi possível criar o jogador!');
      }
    })
    .then(function() {
      console.log('Jogador criado com sucesso!');
    })
    .catch(function(erro) {
      alert(erro.message);
    });
}

function removerjogador(jogador){
  const opcoes = {
    method: 'DELETE',
    headers: {'content-type': 'application/json'}
  }

  fetch(API + '/' + jogador.id, opcoes)
    .then(function(response){
      if(response.status >= 400){
        throw new Error('Nao foi possivel remover!');
      }
    })
    .then(function() {
      console.log('Jogador removido com sucesso!');
    })
    .catch(function(erro){
      alert(erro.message);
    })
}

function pegarjogador(jogador){
  fetch(API + '/' + jogador.id)
    .then(function(response){
      if(response.status >= 400){
        throw new Error('Nao foi possivel pegar o jogador!');
      }
      return response.json();
    })
    .catch(function(erro){
      alert(erro.message);
    })
}

function pegarTodosJogadores(){
  fetch(API)
    .then(function(response){
      if(response.status >= 400){
        throw new Error('Nao foi possivel pegar o jogador!');
      }
      return response.json();
    })
    .catch(function(erro){
      alert(erro.message);
    })
}

function atualizarJogador(jogador){
  const opcoes = {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(jogador)
  }

  fetch(API + '/' + jogador.id, opcoes)
    .then(function(response){
      if(response.status >= 400){
        throw new Error('Nao foi possivel atualizar o jogador!');
      }
    })
    .then(function() {
      console.log('Jogador removido com sucesso!');
    })
    .catch(function(erro){
      alert(erro.message);
    })
}