import request from "request";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=83ee53858fcef1fb9037e4be7445d712&units=metric";

request({ url:API_URL, json: true }, (error, response) => {
    if (error) {
        console.log("unable to connect to weather service!");
        return;
    } else if (response.body.message) {
        console.log(response.body.message);
    }
    else {
        console.log(response.body.main.temp + " °C" );
    }
    console.log("hello");
    
})


