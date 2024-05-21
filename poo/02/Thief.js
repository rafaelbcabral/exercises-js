const Character = require("./Character");

module.exports = class Thief extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa){
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa)
  }

  atacar(personagemAlvo){
    personagemAlvo.pontosDeVida -= 2*(this.pontosDeAtaque - personagemAlvo.pontosDeDefesa)
  }
}

