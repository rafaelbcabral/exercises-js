async function calcularIMC(peso, altura){

      if(isNaN(peso) || isNaN(altura)){
        if(isNaN(altura) && isNaN(peso)){
          return Promise.reject(`Altura e peso inválidos! (${altura}, ${peso})`)
        }
        if(isNaN(peso)){
          return Promise.reject(`Peso inválido! (${peso})`)
        }
        if(isNaN(altura)){
          return Promise.reject(`Altura inválida! (${altura}) `)
        }

        return (peso / (altura * altura))
  }
}

// const squares = await Promise.all(numbers.map(async (number) => {
//   await waitFor(2)
//   return number * number
// }))

async function resultado(peso, altura){
  try {
    console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`)

    const IMC = Number(await calcularIMC(peso, altura));

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
    }, 1);

  }catch (error) {
    console.error(`Erro: ${error}`);
  }
}

resultado(70, 1.75)
resultado(70, "x")
resultado("a", "b")
resultado("x", 1.75)
resultado(50, 1.75)
