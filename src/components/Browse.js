import useNowPlaying from "../customHooks/useNowPlaying";
import useLatest from "../customHooks/useLatest";
import usePopular from "../customHooks/usePopular";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";


const Browse=()=>{
    useNowPlaying();
    usePopular();
    useUpcomingMovies();
    useTopRatedMovies();
    useLatest();
    return(
<div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    <Footer/>
   
</div>
)
};
export default Browse;