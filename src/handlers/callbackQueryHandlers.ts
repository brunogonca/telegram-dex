import TelegramBot from "node-telegram-bot-api";
import { DummyButton } from "../buttons/dummyButton";

const dummyButton = new DummyButton();

export function handleCallbackQuery(
  bot: TelegramBot,
  query: TelegramBot.CallbackQuery
): void {
  dummyButton.handleCallbackQuery(bot, query);
}
