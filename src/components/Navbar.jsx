import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> |
      <Link to="/desafio2-ContextI/favorites"> Favoritos </Link>
    </nav>
  );
}