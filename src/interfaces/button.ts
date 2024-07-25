// src/interfaces/button.ts
import TelegramBot from "node-telegram-bot-api";

export interface Button {
  getButton(): TelegramBot.InlineKeyboardButton;
  handleCallbackQuery(bot: TelegramBot, query: TelegramBot.CallbackQuery): void;
}
