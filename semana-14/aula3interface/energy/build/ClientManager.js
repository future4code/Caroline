"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        this.clients.forEach(client => {
            return this.clients.length;
        });
        console.log(this.getClientsQuantity);
    }
}
const teste1 = new ClientManager();
console.log(teste1);
//# sourceMappingURL=ClientManager.js.map