import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/sair">
          <FaSignInAlt size={24} />
        </Link>
      </Nav>
    </>
  );
}
