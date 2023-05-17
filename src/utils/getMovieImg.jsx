import palomitas from '../img/palomitas-de-maiz.png'
export function getMovieImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : palomitas  
}
// const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;