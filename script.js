$(document).ready(function () {
  //let appiKey1 = e1f97b83ade972f3c39403efd7d09291;
  var APIKey = "e1f97b83ade972f3c39403efd7d09291";

 // Present date and time
    //Use UK time and date format.
    setInterval(function () {
      $("#currentTime").text(moment().format("LLLL"));
    }, 1000);


  // request the city to retrieve data for.
  var city = "#submit-search, GB";

  //data: data to be sent to the server with the request as a query string.

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=" + APIKey
  )
    .then((response) => response.json())
    .then((citiesFound) => {
      let firstCity = citiesFound[0];
      console.log(firstCity.lat);
      console.log(firstCity.lon);

      //callback: function to be executed when request succeeds.

      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&limit=5&appid=${APIKey}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // show data on to html

      data.map(function (city) {
        let li = document.createElement("li");
        let firstCity = document.createElement("p");
      });
    });
});
