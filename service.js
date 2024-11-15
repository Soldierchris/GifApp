// LA Api_KEY de la API de Giphy
//var hola='hola' //no recomendado
//let hola2='hola2' //recomendado
//const hola3='hola3' //Constantes que no cambian
console.log('Si funciona')
const API_KEY = "BaaxskAMPr393cP535tFTOcJR6hLDisM"
const searchQuery = 'goku'

// Funcion para hacer fetch de los datos
async function fetchGifs() {
  const searchEndpoint = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}`
  //intenta obtener la respuesta
  try {
    const response = await fetch(searchEndpoint)

    //si no es positiva arroja un error
    if (!response.ok) {
      throw new Error("Error on service")
    }
    //espera la respuesta y la guarda
    const data = await response.json()
    console.log(data)
    displayGifs(data.data)
  } catch (error) {
    console.error("There was an error", error)
  }
}

function displayGifs(gifs){
  //envio el ID del HTML
  const gifsContainer=document.getElementById('gifs-container')

//Limpia el contenedor antes de mostrar la Gif
  gifsContainer.innerHTML=''

  //Función que recorre todo el objeto de Gifs
gifs.forEach(gif => {
  //Crea un elemento IMG en el DOM
  const img = document.createElement('img');
  //l url de la imagen gif
  img.src=gif.images.fixed_height.url;
  //añade al final de cada elemento de la imagen
  gifsContainer.appendChild(img);

});

}
fetchGifs()