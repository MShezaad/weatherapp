let weather = {
    "apiKey":"153ce49cc3c28f05198090456dba6df2",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q= " 
        + city 
        + "&units=metric&appid="
        + this.apiKey 
        ).then((Response)=> Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function (){
       this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});

document.querySelector(".searchbar")
.addEventListener("keyup", function(event){
if(event.key == "Enter"){
    weather.search();
}
});

weather.fetchWeather("")