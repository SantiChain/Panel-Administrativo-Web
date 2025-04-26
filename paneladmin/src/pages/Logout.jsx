export default function Logout() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#000", // fondo negro total
        }}
      >
        <div
          className="card shadow-lg p-4 rounded text-center"
          style={{
            width: "400px",
            backgroundColor: "#1a1a1a", // gris oscuro elegante
            color: "white", // texto blanco
          }}
        >
          <h3 className="text-danger mb-3">¿Deseas cerrar sesión?</h3>
          <p className="mb-4" style={{ fontWeight: 300 }}>
            Presiona el botón para salir del sistema de forma segura.
          </p>
          <button className="btn btn-outline-danger w-100 fw-bold">
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
  }
  