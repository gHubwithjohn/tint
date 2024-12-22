const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // Use EJS to render views
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

// Weather page to fetch weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.render('index', { weather: null, error: 'Please enter a city' });
    }

    const apiKey = 'your_openweathermap_api_key';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const weather = {
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name
        };
        res.render('index', { weather, error: null });
    } catch (error) {
        res.render('index', { weather: null, error: 'Could not fetch weather data. Please try again.' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Weather app "Tint" is running on http://localhost:${port}`);
});
