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
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
//import * as bcrypt from "bcrypt"
const bcrypt = __importStar(require("bcryptjs"));
class BcryptImplementation {
    encrypt(word) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt(BcryptImplementation.BCRYPT_SALT_ROUNDS);
            console.log(salt);
            const encryptWord = yield bcrypt.hash(word, salt);
            console.log(encryptWord);
            return encryptWord;
        });
    }
    compare(word, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt.compare(word, hash);
        });
    }
}
exports.BcryptImplementation = BcryptImplementation;
BcryptImplementation.BCRYPT_SALT_ROUNDS = 10;
exports.default = app;
const jwt = __importStar(require("jsonwebtoken"));
class JwtImplementation {
    getJwtSecretKey() {
        if (!process.env.JWT_SECRET) {
            throw new Error("Missin JWT secret key");
        }
        return process.env.JWT_SECRET;
    }
    generateToken(userId) {
        const token = jwt.sign({ userId }, this.getJwtSecretKey(), { expiresIn: JwtImplementation.EXPIRES_IN });
        return token;
    }
}
exports.JwtImplementation = JwtImplementation;
JwtImplementation.EXPIRES_IN = "1h";
