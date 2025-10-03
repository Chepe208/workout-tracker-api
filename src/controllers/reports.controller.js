let reports = [
  {
    id: "701",
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    periodo: "2025-09",
    resumen: {
      totalEntrenamientos: 8,
      tiempoTotal: "5h 30m",
      ejerciciosMasFrecuentes: ["Sentadillas", "Press banca"]
    }
  },
  {
    id: "702",
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27620",
    periodo: "2025-04", 
    resumen: {
      totalEntrenamientos: 5,
      tiempoTotal: "3h 45m",
      ejerciciosMasFrecuentes: ["Burpees", "Flexiones"]
    }
  }
];

// Controladores
const reportController = {
  // GET /reports/:id
  getReportById: (req, res) => {
    const { id } = req.params;
    const report = reports.find(r => r.id === id);

    if (!report) {
      return res.status(404).json({ error: 'Reporte no encontrado' });
    }

    res.status(200).json(report);
  },

  // GET /reports - buscar por usuarioId o periodo
  getReports: (req, res) => {
    const { usuarioId, periodo } = req.query;
    let result = reports;

    if (usuarioId) {
      result = result.filter(r => r.usuarioId === usuarioId);
    }

    if (periodo) {
      result = result.filter(r => r.periodo === periodo);
    }

    res.status(200).json(result);
  },
};
module.exports = reportController;