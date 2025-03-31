"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const extensions_1 = require("../../controllers/extensions");
const router = express_1.default.Router();
router.route("/").post(extensions_1.createExtension).get(extensions_1.getExtensions);
router.route("/:id").patch(extensions_1.updateExtension).delete(extensions_1.deleteExtension);
exports.default = router;
