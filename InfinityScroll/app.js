let pagina = 1;
let peliculas = '';
let ultimaPelicula;

// Creamos observador

let observador = new IntersectionObserver((entradas, observador)=> {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting) {
			pagina++;
			cargarPeliculas();
		}
	});
}, {
	rootMargin: '0px 0px 200px 0px',
	threshold: 1.0
});



const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		// console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
//Renderiza el JS de arriba en el ID 'contenedor' del index.html
			document.getElementById('contenedor').innerHTML = peliculas;

			//condicional para no pasar limite de API

			if(pagina < 1000) {
				//Si tiene una ultima pelicula seleccionada, la deseclecciona.

			if(ultimaPelicula) {
				observador.unobserve(ultimaPelicula);
			}

			//Selecciona la ultima pelicula del arreglo con el metodo length -1 y IntersectionObserver la observa con .observe(ultimaPelicula)

			const peliculaEnPantalla = document.querySelectorAll('.contenedor .pelicula');
			ultimaPelicula = peliculaEnPantalla[peliculaEnPantalla.length - 1];
			observador.observe(ultimaPelicula)
			}

			

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();