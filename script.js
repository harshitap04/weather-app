async function callApi(cityname){
    
    const url=`http://api.weatherapi.com/v1/current.json?key=82c1b50ced68415d974120835242909&q=${cityname}&aqi=no`;
    const fetchUrl=await fetch(url);
    const data= await fetchUrl.json()
    console.log(data)
    displayWeather(data)
}
const search= document.querySelector(".search-btn")


search.addEventListener('click',()=>{

    const city = document.querySelector('.input').value;
    if (city) {
     callApi(city)
    } else {
        alert('Please enter a city name.');
    }
    console.log(city)
    // callApi();
   
})


function displayWeather(weather){
    
    const result=document.querySelector(".result")
    const temp=document.createElement('p')
    temp.innerHTML=`${weather.current.temp_c}`
   
    result.appendChild(temp);
    
   
    
}


