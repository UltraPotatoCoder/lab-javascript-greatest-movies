// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielMovies = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    ); // basically return only the ones with these conditions
  });
  return spielMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const validMovies = moviesArray.filter(
    movie =>
      typeof movie.score === 'number' && !isNaN(movie.score) && movie.score >= 8
  );
  if (validMovies.length === 0) {
    return 0;
  }
  const sum = validMovies.reduce(
    (total, movie) => total + (movie.score || 0),
    0
  );
  const average = sum / validMovies.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // filter the drama movies from the array
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  // checking if array is empty
  if (dramaMovies.length === 0) {
    return 0;
  }
  // checking if array has only 1 drama movie
  if (dramaMovies.length === 1) {
    return Number(dramaMovies[0].score.toFixed(2));
  }
  // calculating the sum of the scores for drama movies
  const totalRating = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  // calculating the average score for drama movies
  const averageRating = totalRating / dramaMovies.length;
  // converting the average rating to a number
  return Number(averageRating.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // sort the movies by year in ascending order
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      // if the years are the same sort by title
      return a.title.localeCompare(b.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Sort the movies by title in alphabetical order
  const sortedMovies = moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  // Extract the first 20 titles
  const first20Titles = sortedMovies.slice(0, 20);
  // Extract just the titles from the movies
  const titles = first20Titles.map(movie => movie.title);
  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
