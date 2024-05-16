const Author = require("./Author");

const john = new Author("John Doe", 165)

const post = john.creatingPosts("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)