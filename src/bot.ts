import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { handleMessage } from "./handlers/massageHandlers";
import { handleCallbackQuery } from "./handlers/callbackQueryHandlers";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Obter o token do bot das variáveis de ambiente
const token: string = process.env.TELEGRAM_BOT_TOKEN as string;

// Verificar se o token está definido
if (!token) {
  throw new Error(
    "O token do bot do Telegram não está definido nas variáveis de ambiente."
  );
}

// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new TelegramBot(token, { polling: true });

// Manipuladores de eventos
bot.on("message", (msg) => handleMessage(bot, msg));
bot.on("callback_query", (query) => handleCallbackQuery(bot, query));

// Adicionar logs para depuração
bot.on("polling_error", (error) => {
  console.error("Erro no polling:", error);
});

console.log(
  "Bot está funcionando e usando polling para buscar atualizações..."
);
