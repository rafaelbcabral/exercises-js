const Character = require("./Character");

module.exports = class Warrior extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa, pontosDeEscudo, posicao){
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa)
    this.pontosDeEscudo = pontosDeEscudo
    this.posicao = 'Ataque'
  }

  atacar(personagemAlvo){
    if(this.posicao === 'Ataque'){
      super.atacar(personagemAlvo)
    }else{
      // alert('A posicao nao é de ataque')
    }
  }

  mudarPosicao(){
    if(this.posicao === 'Defesa'){
      this.posicao = 'Ataque'
      this.pontosDeDefesa -= this.pontosDeEscudo
    }else if(this.posicao === 'Ataque'){
      this.posicao = 'Defesa'
      this.pontosDeDefesa += this.pontosDeEscudo
    }else{
      // alert('Posicao Inválida.')
    }
  }
}
// Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
// Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
// Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.
// Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).