import { Videos } from './../entities/videos';
import {GenerateRandomIdGateway} from "../gateways/generateRandomIdGateway";
import {VideoGateway} from "../gateways/videoGateways/videoGateway";


 class CreateVideoUseCase {
    constructor(
        private videoGateway: VideoGateway,
        private generateRandomIdGateway: GenerateRandomIdGateway
    ) {}

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {

        const newVideo = new Videos ( this.generateRandomIdGateway.generateId(), signup.name, signup.url);
        try {
            await this.videoGateway.saveVideo(newVideo)

        } catch (err) {
            console.log(err)
            throw new Error("Um erro ocorreu, tente novamente")
            
        }
        return {
            message: "Vídeo cadastrado com sucesso!"
        }
    }
}

export interface CreateSignUpInput {
    name:string,
    url:string
}

export interface CreateSignUpOutput {
    message: string
}

export default CreateVideoUseCase