"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OAS_1 = require("./OAS");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];
app.get('/users', (req, res) => {
    const { name } = req.query;
    if (name) {
        //@ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    }
    else {
        res.json(users);
    }
});
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(OAS_1.openAPIspec));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
