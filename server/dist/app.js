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
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const extensions_1 = __importDefault(require("./routes/extensions"));
const connect_1 = require("./db/connect");
const dotenv_1 = __importDefault(require("dotenv"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.static("./public"));
// routes
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome" });
});
app.use("/api/v1/extension", extensions_1.default);
// errors middleware
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    }
    catch (error) {
        console.error(error);
    }
});
start();
