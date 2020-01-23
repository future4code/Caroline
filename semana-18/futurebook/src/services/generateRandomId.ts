import {v4} from 'uuid'
import { GenerateRandomIdGateway } from '../business/gateways/generateRandomIdGateway';


export class  generateRandomId implements GenerateRandomIdGateway{
    generateId(): string {
        return v4()
    }
} 