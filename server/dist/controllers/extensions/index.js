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
exports.deleteExtension = exports.updateExtension = exports.getExtensions = exports.createExtension = void 0;
const http_status_codes_1 = require("http-status-codes");
const Extension_1 = __importDefault(require("../../models/Extension"));
const errors_1 = require("../../errors");
const createExtension = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const extension = yield Extension_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ extension });
});
exports.createExtension = createExtension;
const getExtensions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const protocol = req.protocol;
    const host = req.headers.host;
    const { isActive } = req.query;
    let queryObject = {};
    if (isActive) {
        queryObject.isActive = isActive == "true";
    }
    let result = Extension_1.default.find(queryObject);
    const extensions = yield result;
    extensions.forEach((extension) => {
        const logo = extension.logo.split("./")[1];
        const updatedLogoUrl = `${protocol}://${host}/${logo}`;
        extension.logo = updatedLogoUrl;
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ extensions, nbhits: extensions.length });
});
exports.getExtensions = getExtensions;
const updateExtension = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const extension = yield Extension_1.default.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!extension) {
        throw new errors_1.NotFoundError(`No extension with id ${id}`);
    }
    res.status(http_status_codes_1.StatusCodes.OK).json({ extension });
});
exports.updateExtension = updateExtension;
const deleteExtension = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const extension = yield Extension_1.default.findByIdAndDelete(req.params.id);
    res.status(http_status_codes_1.StatusCodes.OK).json({ status: "deleted", extension });
});
exports.deleteExtension = deleteExtension;
