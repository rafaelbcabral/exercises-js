const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.mudarPosicao()
arthur.atacar(cain)
beatrice.atacar(arthur)

console.table({ arthur, beatrice, cain })

cain.atacar(arthur)
arthur.curar(arthur)
beatrice.atacar(cain)

console.table({ arthur, beatrice, cain })