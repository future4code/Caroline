"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_1 = __importDefault(require("./presentation"));
// Trecho do código responsável por inicializar todas as APIs
const server = presentation_1.default.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
const jwt = __importStar(require("jsonwebtoken"));
const teste = () => __awaiter(void 0, void 0, void 0, function* () {
    const jwtKey = process.env.JWT_SECRET || "";
    console.log(process.env.JWT_SECRET);
    const userId = "abcdef";
    const token = jwt.sign({
        userId
    }, jwtKey, {
        expiresIn: "1h"
    });
    const jwtData = jwt.verify(token, jwtKey);
    console.log(token);
    console.log(token);
    console.log(jwtData.userId);
});
teste();
