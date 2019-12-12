import {Client} from "./client"

class ClientManager {
    clients: Client[]
    constructor() {
        this.clients = []
        console.log(this.clients.length)
    }
    
    addClient(client: Client) {
        this.clients.push(client)
    }

    getClientsQuantity(){
        return this.clients.length
    }
    printClientBills(client: Client) {
        this.clients.push(client)
    }    
    
}

const teste1 = new ClientManager ()
console.log(teste1)