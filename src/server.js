import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City parameter is required, e.g. ?city=London' });
  if (!OPENWEATHER_API_KEY) return res.status(500).json({ error: 'Server missing OPENWEATHER_API_KEY environment variable' });

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const response = await axios.get(url, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric'
      }
    });

    const data = response.data;
    const result = {
      city: data.name,
      country: data.sys?.country,
      temp: data.main?.temp,
      description: data.weather && data.weather[0] ? data.weather[0].description : undefined,
      raw: data
    };

    res.json(result);
  } catch (err) {
    if (err.response && err.response.data) {
      return res.status(err.response.status).json({ error: err.response.data.message || 'Weather API error' });
    }
    console.error(err.message || err);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

// Fallback to index.html for single-page frontends
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
