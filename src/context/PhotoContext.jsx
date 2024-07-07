import { createContext, useState, useEffect } from 'react';

const baseURL = 'https://api.pexels.com/v1/search?query=animal&page=10&per_page=20';
const API_KEY = 'CDIsblW2M65S2lQlaKXqr8rd6o0sWPDKe2eBJ1nCAvHZXu13SSyTOZ09';

export const Context = createContext();

export function PhotoProvider({ children }) {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(baseURL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await res.json();
      const photos = data.photos.map(photo => ({
        id: photo.id,
        src: photo.src.tiny,
        liked: false,
      }));
      setFotos(photos);
    };

    getData();
  }, []);

  const globalState = { fotos, setFotos };

  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  );
}
