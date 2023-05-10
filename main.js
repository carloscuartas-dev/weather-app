document.addEventListener("DOMContentLoaded", () => {

    const url = "https://api.openweathermap.org/data/3.0/onecall?"
    const lat= "lat=42.81&"
    const lon= "lon=-1.64&"
    const apiOptions = "units=metric&exclude=minutely,alerts&";
    const appid= "appid=d37ce70b714076ca5396f1698c461eea" 
    const queryUrl = url + lat + lon + apiOptions + appid;
    

    fetch (queryUrl) 
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Weather main data
            let description = data.current.weather[0].description;
            let temp = Math.round(data.current.temp);
            let pressure = data.current.pressure;
            let humidity = data.current.humidity;
            let name = "Pamplona";

            document.getElementById("wrapper-name").innerHTML = "Pamplona";
            document.getElementById("wrapper-description").innerHTML = description;
            document.getElementById("wrapper-temp").innerHTML = temp + "°C";
            document.getElementById("wrapper-pressure").innerHTML = pressure;
            document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";

        });
    
    console.log("DOM fully loaded and parsed!");

});

