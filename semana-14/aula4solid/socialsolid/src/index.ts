import {Posts} from "./Post"
import {JSONFileManager} from "./JSONFileManager";
import {SavePosts} from "./PostCreator"

const post1 = new  Posts ( "Me","blablabla", "12/12/12");

const newPosts: SavePosts = new SavePosts();
newPosts.createPosts(post1);


JSONFileManager.saveToJSON(newPosts);



console.log(newPosts)
