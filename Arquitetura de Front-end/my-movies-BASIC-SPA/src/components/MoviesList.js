import { MovieItem } from "./MovieItem"

export const MoviesList = ({movies}) => {
  return (<section>
    <ul>
      {movies.map(e => <MovieItem key={e.id} title={e.title} />)}
    </ul>
  </section>
  )
}