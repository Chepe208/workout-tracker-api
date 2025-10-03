// Estado en memoria (simulación)
let workouts = [
  {
    id: "101",
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    fechaProgramada: "2025-09-20T10:00:00Z",
    comentarios: "Entrenamiento de fuerza para piernas y pecho",
    fechaCreacion: "2025-09-15T08:00:00Z"
  },
  {
    id: "102",
    usuarioId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27620", 
    fechaProgramada: "2025-09-21T17:30:00Z",
    comentarios: "Entrenamiento cardiovascular y core",
    fechaCreacion: "2025-09-16T10:00:00Z"
  }
];

// Controladores
const workoutController = {
  // GET /workouts/:id
  getWorkoutById: (req, res) => {
    const { id } = req.params;
    const workout = workouts.find(w => w.id === id);

    if (!workout) {
      return res.status(404).json({ error: 'Entrenamiento no encontrado' });
    }

    res.status(200).json(workout);
  },

  // GET /workouts - buscar por usuarioId o fecha
  getWorkouts: (req, res) => {
    const { usuarioId, fecha, search } = req.query;
    let result = workouts;

    if (usuarioId) {
      result = result.filter(w => w.usuarioId === usuarioId);
    }

    if (fecha) {
      result = result.filter(w => w.fechaProgramada.includes(fecha));
    }

    if (search) {
      result = result.filter(w =>
        w.comentarios.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.status(200).json(result);
  },

  // POST /workouts
  createWorkout: (req, res) => {
    const { usuarioId, fechaProgramada, comentarios } = req.body;

    if (!usuarioId || !fechaProgramada) {
      return res.status(400).json({ 
        error: 'usuarioId y fechaProgramada son requeridos'});
    }

    const newWorkout = {
      id: `${workouts.length + 101}`,
      usuarioId,
      fechaProgramada,
      comentarios: comentarios || '',
      fechaCreacion: new Date().toISOString()
    };

    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
  },

  // PUT /workouts/:id
  updateWorkout: (req, res) => {
    const { id } = req.params;
    const { usuarioId, fechaProgramada, comentarios } = req.body;

    const index = workouts.findIndex(w => w.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Entrenamiento no encontrado' });
    }

    if (!usuarioId || !fechaProgramada) {
      return res.status(400).json({ 
        error: 'usuarioId y fechaProgramada son requeridos' 
      });
    }

    workouts[index] = {
      ...workouts[index],
      usuarioId,
      fechaProgramada,
      comentarios: comentarios || ''
    };

    res.status(200).json(workouts[index]);
  },

  // DELETE /workouts/:id
  deleteWorkout: (req, res) => {
    const { id } = req.params;
    const index = workouts.findIndex(w => w.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Entrenamiento no encontrado' });
    }

    const deletedWorkout = workouts.splice(index, 1);
    res.status(200).json({ 
      message: 'Entrenamiento eliminado correctamente',
      deleted: deletedWorkout[0].id 
    });
  },
};

module.exports = workoutController;