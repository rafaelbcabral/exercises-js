class User {
  constructor(fullname, email, password){
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password){
    if(this.email === email && this.password === password){
      console.log('O login foi bem sucedido!');
    }else{
      console.log('O login NAO foi bem sucedido');
    }
  }
}

const Harvey = new User("Harvey Specter", "suits@email.com", "123456")

Harvey.login("suits@email.com", "123456")
Harvey.login("suits@email.com", "654321")

  // um atributo fullname, atribuível na instanciação
// um atributo email, atribuível na instanciação
// um atributo password, atribuível na instanciação
// um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
