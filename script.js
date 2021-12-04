const weatherApi={
    key:"0c3b6bba4a8f71be8f6f163b1a423e41",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
  }
  
  const searchInputBox=document.getElementById('input-box');
  searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
    }
  });
  function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather=>{
      return weather.json();
    }).then(showWeatherReport);
  }
  function showWeatherReport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    let temperature=document.getElementById('temp'); temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;c`;
    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.floor(weather.main.temp_max)}&deg;c (max)`;
  
    let weatherType=document.getElementById('weather');
    weatherType.innerHTML=`${weather.weather[0].main}`;
  
    let date=document.getElementById('date');  
    let todayDate=  new Date();
    date.innerHTML=dateManage(todayDate);
  }
  function dateManage(dateArg){
    let days=["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];  
    let months=["january","febrauary","march","april","may","june","july","august","september","october","november","december"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
  
    return `${date} ${month} (${day}), ${year}`;
  }