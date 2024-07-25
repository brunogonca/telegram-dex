"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Substitua pelo token do seu bot
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    throw new Error("O token do bot do Telegram não está definido nas variáveis de ambiente.");
}
// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// Responde com 'Hello, World!' quando recebe uma mensagem
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hello, World!");
});
console.log("Bot está funcionando e usando polling para buscar atualizações...");
