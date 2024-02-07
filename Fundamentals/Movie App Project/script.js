const movieInfo = document.getElementById('movie-info');
const movieTitle = document.getElementById('movie-title');

async function fetchMovieData(movieTitle) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=ffcdabad&t=${movieTitle}`);
  const data = await response.json();
  return data;
}

async function displayMovieInfo(movieTitle) {
  try {
    const movie = await fetchMovieData(movieTitle);

    if (movie.Response === 'False') {
      movieInfo.append(movie.Error);
      return;
    }

    movieInfo.innerHTML = `
    <div id="movie-image">
      <img src="${movie.Poster}" alt="${movie.Title} movie poster">
    </div>
    <div id="movie-content">
      <h1>${movie.Title}</h1>
      <p><b>Plot:</b> ${movie.Plot}</p>
      <p><b>Awards:</b> ${movie.Awards}</p>
      <p><b>IMDb Rating:</b> ${movie.Ratings[0].Value}</p>
      <p><b>Rotten Tomatoes Rating:</b> ${movie.Ratings[1].Value}</p>
    </div>
    `

  } catch (error) {
    movieInfo.append('Movie not found!')
  }
}


function searchMovie() {
  movieInfo.innerHTML = '';
  displayMovieInfo(movieTitle.value);
}