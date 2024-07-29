import TelegramBot from "node-telegram-bot-api";
import Web3 from "web3";
import { Button } from "../interfaces/button";

export class DummyButton implements Button {
  getButton(): TelegramBot.InlineKeyboardButton {
    return {
      text: "Clique aqui para conectar a carteira",
      url: "https://improved-fortnight-5pv564p7x59f4jqj-3000.app.github.dev/connect-wallet", // URL da nova página Next.js
    };
  }

  handleCallbackQuery(
    bot: TelegramBot,
    query: TelegramBot.CallbackQuery
  ): void {
    if (query.data === "dummy_data") {
      bot.answerCallbackQuery(query.id, {
        text: "Redirecionando para conectar a carteira...",
      });
    }
  }
}
