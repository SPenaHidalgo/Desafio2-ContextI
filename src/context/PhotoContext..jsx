import { createContext, useState, useEffect } from "react";

const apiURL = 'https://api.pexels.com/v1/search?query="trekking"&page=1&per_page=20';
const API_KEY = 'CDIsblW2M65S2lQlaKXqr8rd6o0sWPDKe2eBJ1nCAvHZXu13SSyTOZ09';

export const Context = createContext();

export function PhotoProvider({ children }) {
  const [fotos, setFotos] = useState([])

  const getData = async () => {
    const rest = await fetch(apiURL, { headers: { Authorization: API_KEY } })
    
    const data = await res.json();
    const photos = data.photos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false,
      };
    });

    setFotos(photos);
  };

  useEffect(() => { getData() }, []);

  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}>
    {children}
  </Context.Provider>;
  
}

import { createContext, useState, useEffect } from "react";



// const apiURL = 'https://api.pexels.com/v1/search?query="trekking"&page=1&per_page=20';
// const API_KEY = 'CDIsblW2M65S2lQlaKXqr8rd6o0sWPDKe2eBJ1nCAvHZXu13SSyTOZ09';

// export const Context = createContext();

// export function PhotoProvider({ children }) {
//   const [fotos, setFotos] = useState([]);

//   const getData = async () => {
//     try {
//       const res = await fetch(apiURL, { headers: { Authorization: API_KEY } });
      
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       const photos = data.photos.map((photo) => {
//         return {
//           id: photo.id,
//           src: photo.src.tiny,
//           alt: photo.alt,
//           liked: false,
//         };
//       });

//       setFotos(photos);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   useEffect(() => { getData() }, []);

//   const globalState = { fotos, setFotos };

//   return (
//     <Context.Provider value={globalState}>
//       {children}
//     </Context.Provider>
//   );
// }