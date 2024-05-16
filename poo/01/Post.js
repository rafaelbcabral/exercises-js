const Comment = require("./Comment")

class Post {
  constructor(name, comment, author){
    this.name = name;
    this.comment = [];
    this.author = author;
  }

  addComment(username, content){
    this.comment.push(new Comment(username, content));
  }
}

module.exports = Post



