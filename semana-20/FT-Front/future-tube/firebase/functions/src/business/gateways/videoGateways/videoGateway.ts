import { Videos } from "../../entities/videos"

export interface VideoGateway {
  saveVideo(videos: Videos) : Promise<void>;
}