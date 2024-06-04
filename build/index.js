"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let reportJokes = [];
const API_URL = 'https://icanhazdadjoke.com/';
function getDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error fetching joke: ${response.statusText}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("There are no jokes to show!", error);
            throw error;
        }
    });
}
function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error(`Error fetching Chuck Norris joke: ${response.statusText}`);
            }
            const data = yield response.json();
            console.log("Response from Chuck Norris API:", data);
            const jokeData = {
                id: data.id,
                joke: data.value,
                status: 200
            };
            return jokeData;
        }
        catch (error) {
            console.error('There are no Chuck Norris jokes to show!', error);
            throw error;
        }
    });
}
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return getDadJoke();
        }
        else {
            return getChuckNorrisJoke();
        }
    });
}
let shapes = ["blob1.svg", "blob2.svg", "blob3.svg", "blob4.svg", "blob5.svg",];
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    const selectedShape = shapes[randomIndex];
    const blobBackground = document.getElementById('blobBackground');
    if (blobBackground) {
        blobBackground.style.backgroundImage = `url('/assets/img/${selectedShape}')`;
    }
}
function showNextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const joke = yield fetchJoke();
            showJokeInDOM(joke);
            changeBackground();
        }
        catch (error) {
            console.error("Failed to show next joke!", error);
        }
    });
}
function showJokeInDOM(joke) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jokeElement = document.getElementById('joke');
            if (jokeElement && joke && joke.joke) {
                jokeElement.textContent = joke.joke;
            }
        }
        catch (error) {
            console.error("Failed to get and show dad joke:", error);
        }
    });
}
function voteJoke(score) {
    try {
        const jokeElement = document.getElementById('joke');
        if (jokeElement) {
            const jokeText = jokeElement.textContent || '';
            const currentJokeIndex = reportJokes.findIndex(report => report.joke === jokeText);
            const joke = currentJokeIndex !== -1 ? reportJokes[currentJokeIndex] : null;
            if (joke) {
                joke.score = score;
                console.log('Joke rated:', joke);
                console.log('Contents of reportJokes array:', reportJokes);
            }
            else {
                const date = new Date().toISOString();
                const reportData = { joke: jokeText, score: score, date: date };
                reportJokes.push(reportData);
                console.log('Joke rated:', reportData);
                console.log('Contents of reportJokes array:', reportJokes);
            }
        }
        else {
            throw new Error('The joke element was not found in the DOM.');
        }
    }
    catch (error) {
        console.error('Error rating the joke:', error);
    }
}
function handleScoreButtonClick(score) {
    voteJoke(score);
}
function assignScoreButtonEvents() {
    for (let i = 1; i <= 3; i++) {
        const scoreButton = document.getElementById(`score-${i}`);
        if (scoreButton) {
            scoreButton.onclick = () => handleScoreButtonClick(i);
        }
    }
    const nextJokeButton = document.getElementById('next-joke-button');
    if (nextJokeButton) {
        nextJokeButton.onclick = showNextJoke;
    }
}
function fetchWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiKey = 'bac30964a0849c8461859ca49c09f096';
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}&units=metric`);
            const data = yield response.json();
            const weatherInfo = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            document.getElementById('weather').innerHTML = `<img src="${iconUrl}" alt="Weather icon"> ${weatherInfo}`;
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
        }
    });
}
// Call the fetchWeather function when the page loads
fetchWeather();
assignScoreButtonEvents();
document.addEventListener("DOMContentLoaded", function (event) {
    try {
        fetchWeather(); // Added: Ensure weather data is fetched when the page loads
        assignScoreButtonEvents(); // Changed: Ensure event handlers are attached after DOM content is loaded
        showNextJoke(); // Changed: Ensure the first joke is displayed when the page loads
        changeBackground(); // Changed: Ensure the background is set when the page loads
    }
    catch (error) {
        console.error("Failed to initialize:", error);
    }
});
