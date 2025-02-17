WeatherWiseBot 🌤️- Telegram Weather Bot with NestJS

📌 Introduction

WeatherWiseBot is a Telegram bot built using NestJS that provides users with daily weather updates. It also includes an admin panel with Google Login authentication, allowing admins to manage bot settings and user accounts efficiently.

🚀 Features

🌦 Daily Weather Updates
Users can subscribe to receive daily weather forecasts based on their location.
Supports multiple cities and real-time weather retrieval.

🔐 Admin Panel

Secure Google OAuth2 authentication for admins.
Admins can manage bot settings, including API keys.
User management: Block/unblock users, delete user accounts.

🛠 Tech Stack

Backend Framework: NestJS
Database: MongoDB (optional, for user management)
Authentication: Google OAuth2
Telegram Bot API: node-telegram-bot-api
Weather API: OpenWeatherMap (or another API of choice)
Frontend (Admin Panel): ReactJS / NestJS-based Admin Dashboard

📌 Telegram Bot Handle

@WeatherWiseBot

📦 Installation & Setup

⿡ Clone the Repository

git clone [https://github.com/tiwari-amrita/AeroAlert.git]
cd WeatherWiseBot

⿢ Install Dependencies

npm install

⿣ Set Up Environment Variables

Create a .env file in the root directory and add the required API keys and credentials.

Example .env file:

TELEGRAM_BOT_TOKEN=your-telegram-bot-token
WEATHER_API_KEY=your-weather-api-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
TELEGRAM_BOT_TOKEN: Create a bot using BotFather on Telegram.
WEATHER_API_KEY: Get it from OpenWeatherMap.
GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET: Generate OAuth2 credentials in the Google Developer Console.

⿤ Run the Bot Locally

npm run start

This starts the Telegram bot and the admin panel at http://localhost:3000.

🚀 Deployment

You can deploy the bot and admin panel using AWS, Vercel, Railway, or any cloud provider of your choice.

👨‍💻 Contributors

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
