 



  var api = "http://api.openweathermap.org/geo/1.0/direct?q="

  var APIKey = "91985d9f8baeb6a32bdc3cc0b3a89be8";

  //url: request city to retrieve the data for.
  let searchInput = document.getElementById('search-input')
  let searchButton = document.getElementById('search-button')
  let city;

  searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    city = searchInput.value;
    fetchForecast();
  })

  //data: data to be sent to the server with the request as a query string.

  function fetchForecast() {
    fetch(
      api + city + "&appid=" + APIKey
    )
      .then((response) => response.json())
      .then((citiesFound) => {
        console.log(citiesFound)
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
        console.log(data, '<=== data forecast');
  
        // show data on to html
  
        data.list.map((currentTemp, idx) => {

          let section = document.getElementById("today");
          let firstCity = document.createElement("h3");
          firstCity.innerText = city;
          // console.log(currentTemp)
          // shows the first day, and the next days that are intervals of 8
          if (idx === 0 || idx % 8 == 0) {

            // Add date to top of card

            


            let icon = currentTemp.weather[0].icon;
            let humidity = currentTemp.main.humidity;
            let windSpeed = currentTemp.wind.speed;

  
            let section = document.getElementById("forecast");
            let firstCity = document.createElement("p");
            firstCity.innerText = city;
            
            //making the list
            let ul = document.createElement("ul",);
            //making the list item
            let liIcon = document.createElement("li");
            //Setting the text value of the list item
            liIcon.innerText = icon;

  
            let liHumidity = document.createElement("li");
            liHumidity.innerText = humidity;
  
            let liWindSpeed = document.createElement("li");
            liWindSpeed.innerText = windSpeed;
  
  
            // add list items to the ul element
            ul.append(liIcon)
            ul.append(liHumidity)
            ul.append(liWindSpeed)
  
            // we add the city and the ul to the section
            //section.append(firstCity)
            section.append(ul)
          }
        });
      });
  }