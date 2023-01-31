$(document).ready(function () {
  //let appiKey1 = e1f97b83ade972f3c39403efd7d09291;
  var APIKey = "06389e82d23da07eea5ee0de5cb55be8";

  //url: request city to retrieve the data for.
  var city = "#submit-search, GB";

  //data: data to be sent to the server with the request as a query string.

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "GB&limit=5&appid=" +
      APIKey
  )
    .then((response) => response.json())
    .then((citiesFound) => {
      let firstCity = citiesFound[0];
      console.log(firstCity.lat);
      console.log(firstCity.lon);

      //callback: function to be executed when request succeeds.

      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}direct?q=London,GB&limit=5&appid=06389e82d23da07eea5ee0de5cb55be8`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // show data on to html

      data.map(function (City) {
        let li = document.createElement("li");
        let firstCity = document.createElement("p");
      });
    });
});
