let exercises = [
  {
    id: "ex1",
    name: "Sentadilla",
    description: "Ejercicio para cuádriceps y glúteos",
    categoria: "Fuerza",
    grupoMuscular: "Piernas"
  },
  {
    id: "ex2", 
    name: "Press banca",
    description: "Ejercicio para pectorales",
    categoria: "Fuerza",
    grupoMuscular: "Pecho"
  }
];
const exerciseController = {
  // GET /exercises/:id
  getExerciseById: (req, res) => {
    const { id } = req.params;
    const exercise = exercises.find(ex => ex.id === id);

    if (!exercise) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.status(200).json(exercise);
  },
   // GET /exercises - buscar por categoría, grupo muscular o nombre
  getExercises: (req, res) => {
    const { categoria, grupoMuscular, search } = req.query;
    let result = exercises;

    if (categoria) {
      result = result.filter(ex => 
        ex.categoria.toLowerCase().includes(categoria.toLowerCase())
      );
    }

    if (grupoMuscular) {
      result = result.filter(ex => 
        ex.grupoMuscular.toLowerCase().includes(grupoMuscular.toLowerCase())
      );
    }

    if (search) {
      result = result.filter(ex =>
        ex.name.toLowerCase().includes(search.toLowerCase()) ||
        ex.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.status(200).json(result);
  },
};

module.exports = exerciseController;