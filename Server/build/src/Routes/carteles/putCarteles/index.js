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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carteles_1 = __importDefault(require("../../../Models/carteles"));
const router = (0, express_1.Router)();
router.put('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { cantidad, cartel, base, altura, medidas, faz, valor, total, estructura, archivo, otros, id } = req.body;
    try {
        yield carteles_1.default.findByIdAndUpdate(id, {
            cantidad, cartel, base, altura, medidas, faz, valor, total, estructura, archivo, otros
        });
        // Send response in here
        res.send('Item Updated!');
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;