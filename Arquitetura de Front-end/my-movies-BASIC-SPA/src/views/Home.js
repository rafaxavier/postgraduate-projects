
import { MoviesList } from "../components/MoviesList"
import { MoviesContainer } from "../styles/MoviesContainer"

export const Home = ({movies}) => {
    return (
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    )
}