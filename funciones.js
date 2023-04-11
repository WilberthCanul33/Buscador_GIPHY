const url ='https://api.giphy.com/v1/gifs/search';
let busqueda = "?q=";
const key = '&api_key=3d9V1B1gGCHHAdnUFUh3rCOqn5hnphfZ';
const limite ="&limit=10";

let q="";

let urlCompleta = "";
urlCompleta = url + busqueda + q + key + limite;

const btn = document.getElementById('btn');

btn.onclick = () => {
    document.getElementById("portafolio").innerHTML = '';
    document.getElementById("presentacion").innerHTML = '';
    document.getElementById("presentaciondos").innerHTML = '';

    q = document.getElementById('busqueda').value;
    urlCompleta = url + busqueda + q + key + limite;
    getData();
}
const getData = async () => {
    await fetch(urlCompleta).then((response) => {
        return response.json();
    }).then((giphy) => {
    for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement('img');
        gif.src = giphy.data[i].images["original"].url;
        gif.className = "mb-3";
        document.getElementById("portafolio").appendChild(gif)
    }
})
}

getData();