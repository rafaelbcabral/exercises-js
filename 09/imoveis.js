let imoveis = [];
let opcao;

do {
  opcao = prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}. \n1 - Salvar Imóvel. \n2 - Mostrar todos os imóveis salvos \n3 - Sair`);

  switch (opcao) {
    case '1':
      let imovel = {};
      const proprietario = prompt('Digite o nome do proprietário:');
      const qtdQuartos = Number(prompt('Digite a quantidade de quartos:'));
      const qtdBanheiros = Number(prompt('Digite a quantidade de banheiros:'));
      const garagem = prompt('Possui garagem? (Sim/Nao)');
  
      if (
        (proprietario !== null && isNaN(proprietario) && proprietario.length > 0 && proprietario.length <= 100) &&
        (!isNaN(qtdBanheiros) && qtdBanheiros > 0 && qtdBanheiros <= 50) &&
        (!isNaN(qtdQuartos) && qtdQuartos > 0 && qtdQuartos <= 50) &&
        (garagem === 'Sim' || garagem === 'Nao')
      ) {
        imovel = {
          proprietario: proprietario,
          qtdQuartos: qtdQuartos,
          qtdBanheiros: qtdBanheiros,
          garagem: garagem
        };
        imoveis.push(imovel);
        alert('Salvo com sucesso!');
      } else {
        alert('Entrada inválida. Por favor, insira os dados novamente.');
      }
      break;

    case '2':
      let mensagem = '';
      for (const i of imoveis) {
        mensagem += 'Proprietário: ' + i.proprietario + '\n';
        mensagem += 'Quantidade de quartos: ' + i.qtdQuartos + '\n';
        mensagem += 'Quantidade de banheiros: ' + i.qtdBanheiros + '\n';
        mensagem += 'Possui garagem: ' + i.garagem + '\n';
        mensagem += '----------------------\n';
      }
      alert(mensagem);
      break;

    case '3':
      alert('Saindo...');
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== '3');


