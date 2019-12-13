"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostCreator_1 = require("./PostCreator");
const Post_1 = require("./Post");
const JSONFileManager_1 = require("./JSONFileManager");
class NormalPostCreator {
    constructor() {
        this.fileManager = new JSONFileManager_1.JSONFileManager("posts.json");
    }
    CreatPost(autor, texto) {
        const post = new Post_1.Posts("Chin", "blablabla", "12/12/12");
        JSONFileManager_1.JSONFileManager.saveToJSON(post);
        const post4 = new Post_1.Posts("Chin", "blablabla", "12/12/12");
        const newPosts = new PostCreator_1.SavePosts();
        newPosts.createPosts(post4);
        JSONFileManager_1.JSONFileManager.saveToJSON(newPosts);
    }
}
//# sourceMappingURL=NormalPostCreator.js.map