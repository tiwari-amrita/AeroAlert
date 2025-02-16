"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const telegraf_1 = require("telegraf");
const user_entity_1 = require("./schemas/user.entity");
const axios_1 = require("axios");
let BotService = class BotService {
    constructor(userModel) {
        this.userModel = userModel;
        this.bot = new telegraf_1.Telegraf(process.env.TELEGRAM_BOT_TOKEN || 'default_token_here');
        this.bot.start(async (ctx) => {
            const chatId = ctx.chat.id;
            const username = ctx.from?.username || ctx.from?.first_name || 'Unknown';
            let user = await this.userModel.findOne({ chatId });
            if (!user) {
                user = new this.userModel({ chatId, username, subscribed: false });
                await user.save();
                ctx.reply(`Welcome, ${username}! You can subscribe to weather updates with /subscribe.`);
            }
            else {
                ctx.reply(`Welcome back, ${username}! Use /subscribe to get weather updates.`);
            }
        });
        this.bot.command('subscribe', async (ctx) => {
            const chatId = ctx.chat.id;
            let user = await this.userModel.findOne({ chatId });
            if (!user) {
                user = new this.userModel({ chatId, subscribed: true });
            }
            else {
                user.subscribed = true;
            }
            await user.save();
            ctx.reply('✅ You are now subscribed to daily weather updates! 🌦️');
        });
        this.bot.command('weather', async (ctx) => {
            const city = ctx.message.text.split(' ')[1];
            if (!city) {
                return ctx.reply('⚠️ Please provide a city name. Example: /weather Lucknow');
            }
            try {
                const apiKey = process.env.OPENWEATHER_API_KEY;
                const response = await axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if (response.data && response.data.main) {
                    const weather = response.data;
                    const weatherReport = `🌍 City: ${weather.name}\n🌡️ Temp: ${weather.main.temp}°C\n🌪️ Feels Like: ${weather.main.feels_like}°C\n☁️ Weather: ${weather.weather[0].description}`;
                    ctx.reply(weatherReport);
                }
                else {
                    ctx.reply('⚠️ Could not fetch weather details. Please try again.');
                }
            }
            catch (error) {
                ctx.reply('🚨 Error fetching weather data. Check city name and API key.');
            }
        });
        this.bot.launch();
    }
};
exports.BotService = BotService;
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BotService);
//# sourceMappingURL=bot.service.js.map