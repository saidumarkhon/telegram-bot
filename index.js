
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const token = '7406244528:AAG_22IBj01UW2_dqrQrQQKQD1LKDpMQxj0';
const bot = new TelegramBot(token, { polling: true });
const chatId = 5359819991;

const lessonText = `
1-KUN | Ingliz tili intensiv
- VOA Listening
- Duolingo vocabulary
- Speaking: Describe your morning
- Writing: My daily routine
`;

cron.schedule('0 9 * * *', () => {
    bot.sendMessage(chatId, lessonText, { parse_mode: 'Markdown' });  // Markdown qo'shildi
    console.log('Dars rejasi yuborildi!');
  });