"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyButton = void 0;
class DummyButton {
    getButton() {
        return {
            text: "Clique aqui",
            callback_data: "dummy_data",
        };
    }
    handleCallbackQuery(bot, query) {
        var _a;
        const chatId = (_a = query.message) === null || _a === void 0 ? void 0 : _a.chat.id;
        if (query.data === "dummy_data") {
            bot.answerCallbackQuery(query.id, { text: "Botão dummy clicado!" });
            if (chatId) {
                bot.sendMessage(chatId, "Você clicou no botão dummy!");
            }
        }
    }
}
exports.DummyButton = DummyButton;
