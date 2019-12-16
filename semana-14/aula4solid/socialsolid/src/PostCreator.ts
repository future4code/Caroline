import { Posts } from './Post';


export interface PostCreator {
  
    CreatPost(autor:string, texto:string): void;
  }

export class SavePosts {
    posts: Posts[];
   // fileManager: JSONFileManager;

    constructor() {
        this.posts = []
    }
    createPosts(conta:Posts): void{
        this.posts.push(conta)
    };
    
}
