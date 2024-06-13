import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    const movieDisplay = movie => {
        return (
            <div className="movieList">
                <h3 className="title">{movie.title}</h3>
                <section>Starring: {movie.star}</section>
                <section>Genre: {movie.genre}</section>
                <section>Iconic quote: {movie.quote}</section>
            </div>
        );
    };

    return (
        <div className="mapPractice">
            <h2>Map Practice 2</h2>
            <button onClick={regenerate}>Click To Change Movie List</button>
            <div className="movieList">{movies.map(movieDisplay)}</div>
        </div>
    );
}
