module.exports = class Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa){
    this.nome = nome
    this.pontosDeVida = pontosDeVida
    this.pontosDeAtaque = pontosDeAtaque
    this.pontosDeDefesa = pontosDeDefesa
  }

  atacar(personagemAlvo){
    personagemAlvo.pontosDeVida -= (this.pontosDeAtaque - personagemAlvo.pontosDeDefesa)
  }

}




