import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PhotoProvider} from './context/PhotoContext';
import Header from'./components/Header'
import Footer from'./components/Footer'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import NotFound from './views/NotFound';

function App() {

  return (
    <>
      <PhotoProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PhotoProvider>
    </>
  );
}

export default App;