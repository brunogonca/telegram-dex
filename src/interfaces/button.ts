import TelegramBot from "node-telegram-bot-api";

export interface Button {
  getButton(): TelegramBot.InlineKeyboardButton;
  handleCallbackQuery(bot: TelegramBot, query: TelegramBot.CallbackQuery): void;
  connectWallet?(bot: TelegramBot, chatId: number): void;
}
