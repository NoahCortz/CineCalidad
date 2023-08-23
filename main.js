fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + api_key)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
