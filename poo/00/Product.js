class Product{
  constructor(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(qtdEmEstoque){
    this.inStock += qtdEmEstoque;
  }

  calculateDiscount(porcentagemDeDesconto){
    return this.price * ((100 - porcentagemDeDesconto) / 100);
  }
}

const watch = new Product("Smart Watch", "...", 75)
watch.addToStock(95)
console.log(watch)
console.log(watch.calculateDiscount(20))
console.log(watch.calculateDiscount(70))



// um atributo name, atribuível na instanciação
// um atributo description, atribuível na instanciação
// um atributo price, atribuível na instanciação
// um atributo inStock, inicializado sempre em 0
// um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
// um método calculateDiscount, que tem como parâmetro a porcentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado
//  dividir a porcentagem de desconto por 100 e multiplicar o resultado pelo preço original