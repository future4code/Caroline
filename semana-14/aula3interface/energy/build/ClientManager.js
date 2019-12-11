"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
}
const teste1 = new ClientManager();
console.log(teste1);
//# sourceMappingURL=ClientManager.js.map