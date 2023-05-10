document.addEventListener("DOMContentLoaded", () => {

    const url = "https://api.openweathermap.org/data/2.5/weather?"
    const lat= "lat=42.81&"
    const lon= "lon=-1.64&"
    const apiOptions = "units=metric&exclude=minutely,alerts&";
    const appid= "appid=d37ce70b714076ca5396f1698c461eea"
    const queryUrl = url + lat + lon + apiOptions + appid;
    /*
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Paris';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dd609a2733mshb6bd07643428abcp18de13jsn2b36d7ea063f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    */

    fetch (queryUrl) 
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Weather main data
            const main = data.current.weather[0].main;
            const description = data.current.weather[0].description;
            const temp = Math.round(data.current.temp);
            const pressure = data.current.pressure;
            const humidity = data.current.humidity;
        });
    
    console.log("DOM fully loaded and parsed!");

});

