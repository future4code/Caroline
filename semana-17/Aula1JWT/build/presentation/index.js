"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUpEndPoint_1 = require("../presentation/signUpEndPoint");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/signup', signUpEndPoint_1.createUsersEndPoint);
exports.default = app;
