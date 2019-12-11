"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
        console.log(this.clients.length);
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        return this.clients.length;
    }
}
const teste1 = new ClientManager();
console.log(teste1);
//# sourceMappingURL=ClientManager.js.map