function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "3b9aadb65b416bb41018a340e2e4ecb1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {

            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;

            document.getElementById("weatherResult").innerHTML = `
                <p><strong>Temperature:</strong> ${temperature} °C</p>
                <p><strong>Humidity:</strong> ${humidity} %</p>
                <p><strong>Pressure:</strong> ${pressure} hPa</p>
            `;

            document.getElementById("errorMessage").innerText = "";
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = "";
            document.getElementById("errorMessage").innerText = error.message;
        });
}