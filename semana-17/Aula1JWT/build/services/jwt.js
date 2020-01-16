"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
