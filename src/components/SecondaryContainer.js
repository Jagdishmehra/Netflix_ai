import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer=()=>{
const movies=useSelector(store=>store?.movies)

    //console.log(movies);
    if (!movies?.nowPlayingMovies || !movies?.popularMovies || !movies?.upcomingMovies ||!movies.topRatedMovies||!movies.latestMovies) {
        return null;
    }
    return (
        
             <div className="bg-black">
            <div className="md:-mt-80 -mt-30"> 
             <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
             <MovieList title={"Popular"} movies={movies.popularMovies}/>
             <MovieList title={"Trending"} movies={movies.latestMovies}/>
             <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
             <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
         </div>
         </div>
    );
};

export default SecondaryContainer;