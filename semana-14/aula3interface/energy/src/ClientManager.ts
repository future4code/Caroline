import {Client} from "./client"

class ClientManager {
    clients: Client[]
    constructor() {
        this.clients = []
    }

    addClient(client: Client) {
        this.clients.push(client)
    }

    getClientsQuantity(){
        this.clients.forEach(client =>{
            return this.clients.length
        })
        console.log(this.getClientsQuantity)
    }
 
}

const teste1 = new ClientManager ()
console.log(teste1)

