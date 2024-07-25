import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

// Substitua pelo token do seu bot
const token: string = process.env.TELEGRAM_BOT_TOKEN as string;

if (!token) {
  throw new Error(
    "O token do bot do Telegram não está definido nas variáveis de ambiente."
  );
}

// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new TelegramBot(token, { polling: true });

// Responde com 'Hello, World!' quando recebe uma mensagem
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello, World!");
});

console.log(
  "Bot está funcionando e usando polling para buscar atualizações..."
);
