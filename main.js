fetch("https://api.themoviedb.org/3/movie/12?api_key=" + api_key)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
