function getPosition(){

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            
            reject(new Error('geolocation not found'))
        })
    })

}
getPosition()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
