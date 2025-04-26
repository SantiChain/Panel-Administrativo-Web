import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">AdminPanel</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
