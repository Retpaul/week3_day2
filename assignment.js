function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (city === "Lagos") {
                resolve({ city: "Lagos", temperature: 30, condition: "Sunny" });
            } else {
                reject("Weather data is only available for Lagos");
            }
        }, 1000);
    });
}


fetchWeather("Lagos")
    .then(weather => {
        console.log(`The weather in ${weather.city} is ${weather.temperature}°C and ${weather.condition}.`);
        return weather;
    })
    .then(weather => {
        console.log(`You should probably wear sunglasses since it's ${weather.condition}.`);
    })
    .catch(error => {
        console.error("Error fetching weather:", error);
    });

    async function fetchWeather(city) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (city === "Lagos") {
                    resolve({ city: "Lagos", temperature: 30, condition: "Sunny" });
                } else {
                    reject("Weather data is only available for Lagos");
                }
            }, 1000);
        });
    }
    
    async function getWeather() {
        try {
            const weather = await fetchWeather("Lagos");
            console.log(`The weather in ${weather.city} is ${weather.temperature}°C and ${weather.condition}.`);
            console.log(`You should probably wear sunglasses since it's ${weather.condition}.`);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }
    
    getWeather();
    