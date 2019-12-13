"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./Post");
const JSONFileManager_1 = require("./JSONFileManager");
const PostCreator_1 = require("./PostCreator");
const post1 = new Post_1.Posts("Me", "blablabla", "12/12/12");
const newPosts = new PostCreator_1.SavePosts();
newPosts.createPosts(post1);
JSONFileManager_1.JSONFileManager.saveToJSON(newPosts);
console.log(newPosts);
//# sourceMappingURL=index.js.map