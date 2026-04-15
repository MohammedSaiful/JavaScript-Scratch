

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 10;

    this.comments = [];
    this.isLive = true;
}

let post = new Post('a', 'b', 'c');
console.log(post);

