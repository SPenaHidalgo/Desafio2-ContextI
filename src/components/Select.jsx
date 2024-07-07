import { useContext } from 'react';
import { Context } from '../context/PhotoContext';

export default function Select({ id }) {
  const { fotos, setFotos } = useContext(Context);
  const fotoFavorita = fotos.find(foto => foto.id === id);

  const handleClick = () => {
    const updatedFotos = fotos.map(foto =>
      foto.id === id ? { ...foto, liked: !foto.liked } : foto
    );
    setFotos(updatedFotos);
  };

  const color = fotoFavorita?.liked ? 'red' : 'white';

  return (
    <span className="like" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="30"
        fill={color}
        className="bi bi-heart-fill"
        viewBox="0 0 16 24"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </span>
  );
}
