import * as admin from "firebase-admin"
import { VideoGateway } from './../business/gateways/videoGateways/videoGateway';
import { Videos } from './../business/entities/videos';

 class VideoDatabase implements VideoGateway {
    async saveVideo(video: Videos): Promise<void> {
   const newVideo = {
       name: video.getName(),
       email:video.getUrl()
   }
  await admin.firestore().collection('videos').add(newVideo)
  }
}
export default VideoDatabase
