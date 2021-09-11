# WeatherApp
```Get your current weather data here https://openweathermap.org/current
in your project terminal:
npm install request-> installs request package.
use npm init to create a package.json file containing dependencies.

//import http module
var http = require('http');
//API URL (from OpenWeatherMap)
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Abu+Dhabi,AE&appid=2545db8d1f1c938cc164a099d870ff58&&units=metric';
//Create Server using http module, takes 2 parameters, request&response
var server = http.createServer(function(request, response){
//import request module
    var request = require('request');
    //request takes a url and returns 3 parameters from it, error, response and body, the body contains the api data
    request(url, function(err, res, body){
    //The JSON.parse() method parses a JSON string, constructing the JavaScript value described by the string
        var data = JSON.parse(body);
        //to display the data on the browser window, use response.write
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'City Name: '+ data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature: ' + data.main['temp']+'<br>'+"</h2>");
        response.write("<h2>" + 'Sunset Time: '+new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();


    });
//server listening at port 8081
}).listen(8081);

to run, type node filename.js and visit localhost:8081```
