"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = handleMessage;
const dummyButton_1 = require("../buttons/dummyButton");
const dummyButton = new dummyButton_1.DummyButton();
function handleMessage(bot, msg) {
    const chatId = msg.chat.id;
    if (msg.text === "/start") {
        const options = {
            reply_markup: {
                inline_keyboard: [[dummyButton.getButton()]],
            },
        };
        bot.sendMessage(chatId, "Bem-vindo! Clique no botão abaixo para conectar sua carteira.", options);
    }
}
