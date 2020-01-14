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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const encripto = () => __awaiter(void 0, void 0, void 0, function* () {
    const generateSalt = yield bcrypt.genSalt(10);
    console.log(generateSalt);
    const password = "123456";
    const result = yield bcrypt.hash(password, generateSalt);
    console.log("Senha codificada: ", result);
    const isPasswordRight = yield bcrypt.compare("123456", "string imprimida criptografada");
    console.log(isPasswordRight);
    const isPasswordWrong = yield bcrypt.compare("1AAAA234H56", "string imprimida criptografada");
    console.log(isPasswordWrong);
});
