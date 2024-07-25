// src/buttons/dummyButton.ts
import TelegramBot from "node-telegram-bot-api";
import { Button } from "../interfaces/button";

export class DummyButton implements Button {
  getButton(): TelegramBot.InlineKeyboardButton {
    return {
      text: "Clique aqui",
      callback_data: "dummy_data",
    };
  }

  handleCallbackQuery(
    bot: TelegramBot,
    query: TelegramBot.CallbackQuery
  ): void {
    const chatId = query.message?.chat.id;

    if (query.data === "dummy_data") {
      bot.answerCallbackQuery(query.id, { text: "Botão dummy clicado!" });

      if (chatId) {
        bot.sendMessage(chatId, "Você clicou no botão dummy!");
      }
    }
  }
}
