class Video {}
class Link {}

class Post<AType> {
    content: AType;
}

let videoPost: Post<Video>;
let linkPost: Post<Link>;