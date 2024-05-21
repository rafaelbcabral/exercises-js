const Character = require("./Character");

module.exports = class Mage extends Character{
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa, pontosDeMagia){
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa)
    this.pontosDeMagia = pontosDeMagia
  }

  atacar(personagemAlvo){
    personagemAlvo.pontosDeVida -= ((this.pontosDeAtaque + this.pontosDeMagia) - personagemAlvo.pontosDeDefesa)
  }

  curar(personagemAlvo){
    personagemAlvo.pontosDeVida += (2 * this.pontosDeMagia)
  }
}
