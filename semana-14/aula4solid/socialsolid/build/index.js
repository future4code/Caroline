"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./Post");
const JSONFileManager_1 = require("./JSONFileManager");
const PostCreator_1 = require("./PostCreator");
const post1 = new Post_1.Posts("Me", "blablabla", "12/12/12");
const post2 = new Post_1.Posts("Carol", "blablabla", "12/12/12");
const post3 = new Post_1.Posts("B", "blablabla", "12/12/12");
const newPosts = new PostCreator_1.SavePosts();
newPosts.createPosts(post1);
newPosts.createPosts(post2);
newPosts.createPosts(post3);
JSONFileManager_1.JSONFileManager.saveToJSON(newPosts);
//# sourceMappingURL=index.js.map