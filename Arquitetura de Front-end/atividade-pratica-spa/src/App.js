import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Headers } from './components/Headers';
import { Blog } from './views/Blog';
import { Sobre } from './views/Sobre';
import { Descricao } from './views/Descricao';
import { ContentContainer } from './styles/ContentContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <ContentContainer>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/descricao' element={<Descricao />} />
          </Routes>
        </ContentContainer>
      </Router>
    </div>
  );
}

export default App;
