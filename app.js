var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Abu+Dhabi,AE&appid=2545db8d1f1c938cc164a099d870ff58&&units=metric';
var server = http.createServer(function(request, response){
    var request = require('request');
    request(url, function(err, res, body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'City Name: '+ data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature: ' + data.main['temp']+'<br>'+"</h2>");
        response.write("<h2>" + 'Sunset Time: '+new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();


    });
}).listen(8081);
