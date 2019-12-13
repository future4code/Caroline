import {Posts} from "./Post"
import {JSONFileManager} from "./JSONFileManager";
import {SavePosts} from "./PostCreator"

const post1 = new  Posts ( "Me","blablabla", "12/12/12");
const post2 = new  Posts ( "Carol","blablabla", "12/12/12");
const post3 = new  Posts ( "B","blablabla", "12/12/12");

const newPosts: SavePosts = new SavePosts();
newPosts.createPosts(post1);
newPosts.createPosts(post2);
newPosts.createPosts(post3);

JSONFileManager.saveToJSON(newPosts);


