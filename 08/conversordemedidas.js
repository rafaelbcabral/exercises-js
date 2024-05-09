const numeroMetros = Number(prompt('Digite o seu número, em metros.'));

const medida = prompt('Digite a medida que deseja para converter. Exemplo: milimetro(mm), centimetro(cm), decimetro(dm), decametro(dam), hectometro(hm), quilometro(km)');

switch(medida){
  case 'mm':
  const numeroMM = numeroMetros * 1000;
    alert(`Seu número é ${numeroMM}mm`);
  break
  case 'cm':
  const numeroCM = numeroMetros * 100;
        alert(`Seu número é ${numeroCM}cm`);
  break;
  case 'dm':
  const numeroDM = numeroMetros * 10;
    alert(`Seu número é ${numeroDM}dm`);
break;
  case 'dam':
  const numeroDAM = numeroMetros / 10;
    alert(`Seu número é ${numeroDAM}dam`);
break;
  case 'hm':
  const numeroHM = numeroMetros / 100;
    alert(`Seu número é ${numeroHM}hm`);
break;
  case 'km':
  const numeroKM = numeroMetros / 1000;
    alert(`Seu número é ${numeroKM}km`);
break;
  default:
    alert('Valor inválido, tente novamente!');
    break
}