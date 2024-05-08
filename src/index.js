function displaytemp(response){
    let temp= document.querySelector(".temp");
    temp.innerHTML = Math.round(response.data.temperature.current);
    console.log(Math.round(response.data.temperature.current));
}
 
// let city  = document.querySelector("city"); 
function displaycity(event){
    event.preventDefault();
    let h1 = document.querySelector("h1");
    let city = document.querySelector("#city");
    // let city = inputcity.value;
    console.log(city.value); 
    h1.innerHTML = city.value;
    // let city = "Addis Ababa"

    let apiKey = "e84352t57bcfd38870b8f1603bcaa4o4";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displaytemp)
}

let search = document.querySelector("#search");
search.addEventListener("submit",displaycity);

  
// let city = "london";
// APIKey = "5f4089afaf5945bdb6062636242904";

// apiurl= "http://api.weatherapi.com/v1/current.json?query=${city}&key=${APIKey}";
