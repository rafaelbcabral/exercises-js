function async(peso, altura){
  return new Promise((resolved, rejected) => {
    let IMC = 0

      if(isNaN(peso) || isNaN(altura)){
        if(isNaN(altura) && isNaN(peso)){
          rejected(`Altura e peso inválidos! (${altura}, ${peso})`)
        }
        if(isNaN(peso)){
          rejected(`Peso inválido! (${peso})`)
        }
        if(isNaN(altura)){
          rejected(`Altura inválida! (${altura}) `)
        }
      }else{
      setTimeout(() => {
        IMC = peso/(altura * altura)
        resolved(IMC)
    }, 1000)
  }
  })
}

function resultado(peso, altura){
  async(peso, altura).then((IMC) => {
    console.log(`A promise está funcionando. Seu IMC é de ${IMC.toFixed(2)} para ${peso}Kg e ${altura}m`);
    setTimeout(() => {
      if (IMC < 18.5) {
        console.log('Abaixo de 18.5: **magreza**');
      } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log('Entre 18.5 e 24.9: **normal**');
      } else if (IMC >= 25 && IMC <= 29.9) {
        console.log('Entre 25 e 29.9: **sobrepeso**');
      } else if (IMC >= 30 && IMC <= 39.9) {
        console.log('Entre 30 e 39.9: **obesidade**');
      } else if (IMC >= 40) {
        console.log('Acima de 40: **obesidade grave**');
      }
    }, 2 * 1000);
  }).catch((error) => {
    console.error(`Erro: ${error}`);
  });

  console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`)
}

resultado(70, 1.75)
resultado(70, "x")
resultado("a", "b")
resultado("x", 1.75)
resultado(50, 1.75)
