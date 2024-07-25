"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCallbackQuery = handleCallbackQuery;
const dummyButton_1 = require("../buttons/dummyButton");
const dummyButton = new dummyButton_1.DummyButton();
function handleCallbackQuery(bot, query) {
    dummyButton.handleCallbackQuery(bot, query);
}
