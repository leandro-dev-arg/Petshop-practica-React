import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Page404 from './pages/Page 404';
import Header from './components/header';
import Post from './components/Post';
import Categoria from './pages/Categoria';
import { BrowserRouter as Router ,Routes,Route, } from 'react-router-dom';





function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Posts/:id' element={<Post/>}/>
        <Route path='/Categoria/:id' element={<Categoria/>}/>
        <Route path='*' element={<Page404/>} />
      </Routes>
    
    </Router>
  );
}

export default App;
