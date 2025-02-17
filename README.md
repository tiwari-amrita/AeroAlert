WeatherWiseBot 🌤️- Telegram Weather Bot with NestJS

📌 Project Overview

WeatherWiseBot is a Telegram bot built using NestJS that provides users with daily weather updates. It also includes an admin panel with Google Login authentication, allowing admins to manage bot settings and user accounts efficiently.

🚀 Features

🌤️ Daily Weather Updates

Users can subscribe to receive weather updates daily.

Weather data is fetched from a third-party weather API.

🔐 Admin Panel

Google Login authentication for secure access.

Admins can update bot settings (e.g., API keys, update intervals).

User management: block or delete users.

🛠 Tech Stack

Backend Framework: NestJS
Database: MongoDB (optional, for user management)
Authentication: Google OAuth2
Telegram Bot API: node-telegram-bot-api
Weather API: OpenWeatherMap (or another API of choice)
Frontend (Admin Panel): ReactJS / NestJS-based Admin Dashboard

📌 Telegram Bot Handle

@WeatherWiseBot

🔧 Installation & Setup

1️⃣ Clone the Repository

git clone [https://github.com/tiwari-amrita/AeroAlert.git]
cd WeatherWiseBot

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the required API keys and credentials.

Example .env file:

TELEGRAM_BOT_TOKEN=your-telegram-bot-token

WEATHER_API_KEY=your-weather-api-key

GOOGLE_CLIENT_ID=your-google-client-id

GOOGLE_CLIENT_SECRET=your-google-client-secret

TELEGRAM_BOT_TOKEN: Create a bot using BotFather on Telegram.

WEATHER_API_KEY: Get it from OpenWeatherMap.

GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET: Generate OAuth2 credentials in the Google Developer Console.

4️⃣ Run the Bot Locally

npm run start
This starts the Telegram bot and the admin panel at http://localhost:3000.

5️⃣ Deploy the Bot (Optional)

For production deployment, use Docker or a cloud provider like Heroku, AWS, or Vercel.

🚀 Deployment

You can deploy the bot and admin panel using AWS, Vercel, Railway, or any cloud provider of your choice.

👨‍💻 Author

Amrita Tiwari

tiwariamrita2005@gmail.com

[https://www.linkedin.com/in/amrita-tiwari033617293]

📜 License

This project is licensed under the MIT License..

📷 Screnshotse

## 🌟 Screenshots
### 1️⃣ Bot in Action
![Bot Interface](images/Interface.png)

### 2️⃣ Admin Panel
<img src="images/admin panel.png" width="700">
