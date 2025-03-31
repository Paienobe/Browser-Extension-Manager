"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ExtensionSchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, "Please provide extension name"] },
    description: {
        type: String,
        required: [true, "Please provide a descriptions"],
    },
    isActive: { type: Boolean, default: false },
    logo: { type: String, required: [true, "Please provide a logo"] },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Extension", ExtensionSchema);
