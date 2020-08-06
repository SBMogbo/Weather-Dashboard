
// This .on("click") function will trigger the AJAX Call
$("#enter").on("click", function (event) {
  event.preventDefault();
  // grab the text from the input box
  var inputVal = $("#userInput").val();
  console.log(inputVal)
  $("#currentWeather").html("")
  var apiKey = "9168a9fd60c893abbc3a3c20f2286497";
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=imperial`;

  console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.list[0])
    //temp
    var temp =$("<p>").text(response.list[0].main.temp);
    $("#currentWeather").append("Degrees",temp);
    //name of city
    var city =$("<p>").text(response.city.name);
    $("#currentCity").append(city);
    //humidity
    var humidity =$("<p>").text(response.list[0].main.humidity);
    $("#currenthumidity").append("Humidity",humidity);
    //wind speed
    var wind =$("<p>").text(response.list[0].wind.speed);
    $("#currentWind").append("Wind Speed",wind);
    //weather
    var feelsLike =$("<p>").text(response.list[0].main.feels_like);
    $("#currentClouds").append('Feels like',feelsLike); 
    //  day 1
  var tempOne =$("<p>").text(response.list[1].main.temp);
  var humidityOne =$("<p>").text(response.list[1].main.humidity);
  $("#dayOne").append("Degrees",tempOne);
  $("#dayOne").append("Humidity",humidityOne);
   //  day 2
   var tempTwo =$("<p>").text(response.list[2].main.temp);
   var humidityTwo =$("<p>").text(response.list[2].main.humidity);
   $("#dayTwo").append("Degrees",tempTwo);
   $("#dayTwo").append("Humidity",humidityTwo);
   //  day 3
   var tempThree =$("<p>").text(response.list[3].main.temp);
   var humidityThree =$("<p>").text(response.list[3].main.humidity);
   $("#dayThree").append("Degrees",tempThree);
   $("#dayThree").append("Humidity",humidityThree);
   //  day 4
   var tempFour =$("<p>").text(response.list[4].main.temp);
   var humidityFour =$("<p>").text(response.list[4].main.humidity);
   $("#dayFour").append("Degrees",tempFour);
   $("#dayFour").append("Humidity",humidityFour);
   //  day 5
   var tempFive =$("<p>").text(response.list[5].main.temp);
   var humidityFive =$("<p>").text(response.list[5].main.humidity);
   $("#dayFive").append("Degrees",tempFive);
   $("#dayFive").append("Humidity",humidityFive);
   
  });
  
});