window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `` //paste API call here

        })

    } else {
        h1.textContent = "Hey this is not working because you did not enable location"
    }
})