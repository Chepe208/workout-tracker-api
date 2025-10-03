let progress = [
  {
    id: "501",
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    workoutId: "101",
    fechaFinalizacion: "2025-09-20T11:15:00Z",
    notas: "Mejor resistencia"
  },
  {
    id: "502", 
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27620",
    workoutId: "102",
    fechaFinalizacion: "2025-09-21T18:45:00Z", 
    notas: "Cardio completado"
  }
];

// Controladores
const progressController = {
  // GET /progress/:id
  getProgressById: (req, res) => {
    const { id } = req.params;
    const progressItem = progress.find(p => p.id === id);

    if (!progressItem) {
      return res.status(404).json({ error: 'Progreso no encontrado' });
    }

    res.status(200).json(progressItem);
  },

  // GET /progress - buscar por usuarioId, workoutId o fecha
  getProgress: (req, res) => {
    const { usuarioId, workoutId, fecha } = req.query;
    let result = progress;

    if (usuarioId) {
      result = result.filter(p => p.usuarioId === usuarioId);
    }

    if (workoutId) {
      result = result.filter(p => p.workoutId === workoutId);
    }

    if (fecha) {
      result = result.filter(p => p.fechaFinalizacion.includes(fecha));
    }

    res.status(200).json(result);
  },
};

module.exports = progressController;