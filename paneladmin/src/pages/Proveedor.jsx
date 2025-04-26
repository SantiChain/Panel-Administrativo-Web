export default function Proveedor() {
    const proveedores = [
      { id: 101, empresa: "Distribuciones Globales", contacto: "distribuciones@global.com" },
      { id: 102, empresa: "TechMarket S.A.", contacto: "ventas@techmarket.com" },
      { id: 103, empresa: "Suministros Express", contacto: "contacto@suministrosexpress.co" },
    ];
  
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}>
        <div className="card shadow p-4 rounded" style={{ width: "90%", maxWidth: "800px" }}>
          <h2 className="text-center mb-4 text-success">Proveedores Registrados</h2>
          <table className="table table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Empresa</th>
                <th>Contacto</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.empresa}</td>
                  <td>{p.contacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  