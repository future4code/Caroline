import {Client} from "./client"

class ClientManager {
    clients: Client[]
    constructor() {
        this.clients = []
    }

    addClient(client: Client) {
        this.clients.push(client)
    }
}

const teste1 = new ClientManager ()
console.log(teste1)