export default function Clientes() {
    const clientes = [
      { id: 1, nombre: "Santiago Chain", email: "santiago2200147@correo.com" },
      { id: 2, nombre: "Andrés Martínez", email: "andres.martinez@email.com" },
      { id: 3, nombre: "Paula Gómez", email: "Paugomez@email.com" },
    ];
  
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}>
        <div className="card shadow p-4 rounded" style={{ width: "90%", maxWidth: "800px" }}>
          <h2 className="text-center mb-4 text-primary">Lista de Clientes</h2>
          <table className="table table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  