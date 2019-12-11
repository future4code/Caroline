import {Client} from "./client"

class Zoo {
    clients: Client[]
    constructor() {
        this.clients = []
    }

    addClient(client: Client) {
        this.clients.push(client)
    }
}