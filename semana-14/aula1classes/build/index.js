"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const bank_1 = require("./bank");
const JSONFileManager_1 = require("./JSONFileManager");
const useraccount1 = new UserAccount_1.UserAccount(10, "44488899951", "Ching", 18);
const useraccount2 = new UserAccount_1.UserAccount(500, "8888888888", "Leela", 22);
const novasContas = new bank_1.Bank();
novasContas.createAccount(useraccount1);
novasContas.createAccount(useraccount2);
JSONFileManager_1.JSONFileManager.saveToJSON(novasContas);
const objetoSalvo = JSONFileManager_1.JSONFileManager.getJSONContent();
console.log(novasContas);
console.log(objetoSalvo);
//# sourceMappingURL=index.js.map