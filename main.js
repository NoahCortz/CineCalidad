let miPelicula = "";

// Callback
// Promesas
// Async Await

// Función anónima
const setearVariable = function (data) {
    miPelicula = data;
    let template = `
        <h3>${ data.title }</h3>
        <p>${ data.overview }</p>
    `;

    document.querySelector("#miPelicula").innerHTML = template;
}

// Funcion declarada | nombrada
function obtenerPelicula() {
    miPelicula = fetch("https://api.themoviedb.org/3/movie/12?api_key=" + api_key)
        .then((res) => res.json())
        .then((data) => setearVariable(data))
        .catch(() => []);
}

// Función Arrow 'Flecha' ES6
const miFuncionFlecha = () => 2 * 2;


obtenerPelicula();
