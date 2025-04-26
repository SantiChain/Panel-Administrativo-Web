import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Proveedor from "./pages/Proveedor";
import Usuarios from "./pages/Usuarios";
import Logout from "./pages/Logout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">AdminPanel</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/clientes" className="nav-link">
                  Clientes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/proveedor" className="nav-link">
                  Proveedor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/usuarios" className="nav-link">
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
