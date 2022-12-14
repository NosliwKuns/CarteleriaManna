"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../config/ConfigEntorno/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id }, config_1.default.jwtSecret, {
        expiresIn: 86400
    });
}
exports.default = createToken;
