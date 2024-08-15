"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = +(process.env.PORT || 8080);
const hostname = '127.0.0.1';
const app = (0, express_1.default)();
app.set("views", path_1.default.join(__dirname, 'views'));
app.set("view engine", "ejs");
const assetsPath = path_1.default.join(__dirname, "public");
app.use(express_1.default.static(assetsPath));
app.use("/", router);
app.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
});
