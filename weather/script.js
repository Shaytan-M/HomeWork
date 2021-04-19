async function getData(url){
    return await fetch(url)
    .then(data => {
       return data.json();
    })
}

function showWeather(event){
    event.preventDefault()

    


    let cityValue = event.target.city.value;



    getData(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=7e3dd19d307e2c88d6325375c12fbe4e`).then(data => {



        document.querySelector('.weather').style.display = 'block';


        document.querySelector('#city').innerHTML = data.name;
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;




        descr.innerHTML = data.weather[0].main;
        temp.innerHTML = data.main.temp.toFixed(1) + '&#176' + 'C';
        min_temp.innerHTML = data.main.temp_min.toFixed(1) + '&#176' + 'C';
        max_temp.innerHTML = data.main.temp_max.toFixed(1) + '&#176' + 'C';
        wind.innerHTML = data.wind.speed;


        let date = data.dt;
       

        document.querySelector('#date').innerHTML =new Date(date * 1000).toLocaleDateString();


        console.log(data);


        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=7e3dd19d307e2c88d6325375c12fbe4e`).then(data => {
            return data.json()
        }).then(data => {
            document.querySelector('.hour_weather_wrapepr').style.display = 'flex';


            day.innerHTML = new Date().toLocaleString('en-us', {  weekday: 'long' })

            console.log(data);
        })

        
    }).catch(error => {



        document.querySelector('.weather').style.display = 'block';


        document.querySelector('.weather').innerHTML = `<div class="error" id="error">
        <h1> Error 404 </h1> <h2>NOT FOUND</h2> <h3>Please enter a different city</h3></div>`



        setTimeout(() => {
            alert('ERROR')
            window.location.reload();
        });

        

    })


    cityValue = '';


    
}





