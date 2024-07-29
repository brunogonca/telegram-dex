"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dotenv_1 = __importDefault(require("dotenv"));
const massageHandlers_1 = require("./handlers/massageHandlers");
const callbackQueryHandlers_1 = require("./handlers/callbackQueryHandlers");
// Carregar variáveis de ambiente do arquivo .env
dotenv_1.default.config();
// Obter o token do bot das variáveis de ambiente
const token = process.env.TELEGRAM_BOT_TOKEN;
// Verificar se o token está definido
if (!token) {
    throw new Error("O token do bot do Telegram não está definido nas variáveis de ambiente.");
}
// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// Manipuladores de eventos
bot.on("message", (msg) => (0, massageHandlers_1.handleMessage)(bot, msg));
bot.on("callback_query", (query) => (0, callbackQueryHandlers_1.handleCallbackQuery)(bot, query));
// Adicionar logs para depuração
bot.on("polling_error", (error) => {
    console.error("Erro no polling:", error);
});
console.log("Bot está funcionando e usando polling para buscar atualizações...");
