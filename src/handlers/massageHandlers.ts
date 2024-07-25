// src/handlers/messageHandler.ts
import TelegramBot from "node-telegram-bot-api";
import { DummyButton } from "../buttons/dummyButton";

const dummyButton = new DummyButton();

export function handleMessage(
  bot: TelegramBot,
  msg: TelegramBot.Message
): void {
  const chatId = msg.chat.id;

  if (msg.text === "/start") {
    const options = {
      reply_markup: {
        inline_keyboard: [[dummyButton.getButton()]],
      },
    };

    bot.sendMessage(chatId, "Bem-vindo! Este é um botão dummy.", options);
  }
}
