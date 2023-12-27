const TelegramBot = require('node-telegram-bot-api');

const token = '6371902409:AAF-C66qTqhjAqzJ3NF-tH3toj5Xj2N6Cgw';

const bot = new TelegramBot(token, {polling: true});


console.log('Bot is running...');

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text) {
        bot.sendMessage(chatId, `Received your message: ${msg.text}`);
    }
});

bot.on('photo', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, `Received a photo`);
});
