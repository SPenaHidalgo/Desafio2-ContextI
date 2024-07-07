import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PhotoProvider } from './context/PhotoContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import NotFound from './views/NotFound';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <PhotoProvider>
        <BrowserRouter>
        <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PhotoProvider>
    </>
  );
}

export default App;