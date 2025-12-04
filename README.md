# Weather App

A simple Node + Express backend with a static frontend. The backend proxies requests to OpenWeatherMap so the API key is kept on the server.

Quick start

1. Copy `.env.example` to `.env` and set your `OPENWEATHER_API_KEY`.

```bash
cp .env.example .env
# edit .env to set OPENWEATHER_API_KEY
```

2. Install dependencies

```bash
npm install
```

3. Run locally

```bash
npm run dev    # for development (nodemon)
npm start      # for production
```

Deployment notes

- Provide the `OPENWEATHER_API_KEY` environment variable on the host (Render, Vercel Serverless functions, Fly, etc.).
- The app uses `PORT` from the environment if provided.

Example Render setup

- Build command: `npm install`
- Start command: `npm start`
- Set an environment variable named `OPENWEATHER_API_KEY` with your key

Security

- Do not commit your real `.env` file with the API key to version control. Use `.env.example` as a template.

# weather-app
# weather-app
# weather-app
# weather-app
# weather-app
# weather-app
# weather-app
# weather-app
