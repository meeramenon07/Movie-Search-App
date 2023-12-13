const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6610ef7f433247e8c8db7277392a1b5a&page=1';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=6610ef7f433247e8c8db7277392a1b5a&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url) {
  fetch(url).then(res => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});








/**const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6610ef7f433247e8c8db7277392a1b5a&page=1";
const IMGPATH = " https://image.tmdb.org/t/p/w1280/9Rj8
l6gElLpRL7Kj17iZhrT5Zuw.jpg ";
const SEARCHAPI = "https://api.themoviedb.org/3/movie/343611?&append_to_response=videos&api_key=6610ef7f433247e8c8db7277392a1b5a";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
showMovies(apiUrl);
function showMovies(apiUrl){
  fetch(url).then(res=>res.json)
   .then(function(data){
    console.log(data.results);
    data.results.forEach(element=>{
      const el = document.createElement('div');
const image = document.createElement('img');
const text = document.createElement('h2');
text.innerHTML = `${element.title}`;
 image.src = IMGPATH + element.poster_oath;
el.appendChild(image);
el.appendChild(text);
main.alpendChild(el);
    });
  });
}
form.addEventListener("submit",
 (e) =>{
  e.preventDefault();
  main.innerHTML = "";
  const searchTerm = search.value;
  if(searchTerm){
    showMovies(SEARCHAPI + searchTerm);
     search.value = "";
  }
});

**/
 
