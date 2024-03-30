// import './App.css';
import { useEffect, useState } from 'react';
import { MoviesService } from './api/MoviesService';
import { Header } from './components/Header';
import { Home } from './views/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Sobre } from './views/Sobre';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const res = MoviesService.getMovies();
    setMovies(res);
  }, []);

  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/about' element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
