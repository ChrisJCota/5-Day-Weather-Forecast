function getWeatherInfo(){

    const myKey = '513fc33fbeec170fd21961f6c0e092b8';

    var cityInput = document.getElementById("cityName");
    var cityName = document.getElementById("cityHead");

    var cityListArray = document.getElementById("cityList");

    cityName.innerHTML = cityInput.value;

    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q="+cityInput.value+"&appid="+myKey;

    var inputedCity = cityInput.value;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            for(i=0; i<5; i++){
                document.getElementById("day" +(i+1) + "Min").innerHTML = "Min: " +Number(data.list[i].main.temp_min - 276.55).toFixed(1)+"°";
            }
            for(i=0; i<5; i++){
                document.getElementById("day" +(i+1) + "Max").innerHTML = "Max: " +Number(data.list[i].main.temp_max - 277.13).toFixed(2)+"°";
            }
            for(i=0; i<5; i++){
                document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon +".png";
            }
            
        })
        .catch(err => alert("Something went wrong"))

    function storedSearch(){

        var userCity ={
            city: cityInput.value
        };
        var citiesArray = [];

        console.log(userCity);
        citiesArray.push(userCity);

        var storedCities = JSON.stringify(citiesArray);


        localStorage.setItem("City", storedCities);


        function showCities(){

        var searchedCities = localStorage.getItem("City");
        
        var storeCityNames = JSON.parse(searchedCities);

        for(var i = 0; i <storeCityNames.length; i++){

        var listOfCities = document.createElement("li");
        listOfCities.innerHTML = storeCityNames[i].city;
        cityListArray.appendChild(listOfCities);

        }
        }
        
        showCities();

    }
    storedSearch();
    
    

    }

    

          
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();

    function checkDay(day){
        if(day + d.getDay() > 6){
            return day + d.getDay()-7;
        }
        else{
            return day +d.getDay();
        }
    }
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1)).innerHTML = days[checkDay(i)];
    }


    





