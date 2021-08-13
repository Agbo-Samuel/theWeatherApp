window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/geo/1.0/direct?q=Accra,GH&limit=5&appid=82dc3092452c5fff3445d3122ebfc601`; //paste API call here
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                });

        })

    } else {
        h1.textContent = "Hey this is not working because you did not enable location"
    }
})