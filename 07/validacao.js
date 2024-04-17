export function validarDados(nome, alturaSemFormatacao, pesoSemFormatacao){
  const erros = [];
  const altura = Number(alturaSemFormatacao);
  const peso = Number(pesoSemFormatacao);

  if(nome.length < 2 || nome.length > 100){
    erros.push('Nome inválido!');
  }

  if(isNaN(altura) || altura < 0 || altura > 2.99){
    erros.push('Altura inválida!');
  }

  if(isNaN(peso) || peso < 0 || peso > 299.9){
    erros('Peso inválido!');
  }

  return erros;
}