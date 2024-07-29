"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyButton = void 0;
class DummyButton {
    getButton() {
        return {
            text: "Clique aqui para conectar a carteira",
            url: "https://improved-fortnight-5pv564p7x59f4jqj-3000.app.github.dev/connect-wallet", // URL da nova página Next.js
        };
    }
    handleCallbackQuery(bot, query) {
        if (query.data === "dummy_data") {
            bot.answerCallbackQuery(query.id, {
                text: "Redirecionando para conectar a carteira...",
            });
        }
    }
}
exports.DummyButton = DummyButton;
