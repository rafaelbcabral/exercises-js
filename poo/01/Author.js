const Post = require("./Post")

class Author {
  constructor(nameAuthor, age){
    this.nameAuthor = nameAuthor;
    this.age = age;
    this.posts = [];
}

creatingPosts(name, comment){
  const newPost = new Post(name, comment, this);
  this.posts.push(newPost);
  return newPost;
}
}
  
module.exports = Author
  // Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado.