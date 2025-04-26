export default function Usuarios() {
    const usuarios = [
      { id: 201, usuario: "admin01", rol: "Administrador" },
      { id: 202, usuario: "soporte24", rol: "Soporte Técnico" },
      { id: 203, usuario: "ventas_online", rol: "Vendedor" },
    ];
  
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}>
        <div className="card shadow p-4 rounded" style={{ width: "90%", maxWidth: "800px" }}>
          <h2 className="text-center mb-4 text-info">Usuarios del Sistema</h2>
          <table className="table table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.usuario}</td>
                  <td>{u.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  