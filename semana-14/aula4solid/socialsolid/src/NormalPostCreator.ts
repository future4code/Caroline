import {PostCreator,SavePosts} from "./PostCreator"
import {Posts} from "./Post"
import {JSONFileManager} from "./JSONFileManager";


class NormalPostCreator implements PostCreator {
    protected fileManager: JSONFileManager;
    constructor(){
        this.fileManager = new JSONFileManager("posts.json");
    }
   public CreatPost(autor:string, texto:string): void {

    const post = new Posts ("Chin","blablabla", "12/12/12");
    JSONFileManager.saveToJSON(post);
       
        const post4 = new  Posts ( "Chin","blablabla", "12/12/12");

        const newPosts: SavePosts = new SavePosts();
        newPosts.createPosts(post4);

        JSONFileManager.saveToJSON(newPosts);
   }
}
//tentativasFalhas


