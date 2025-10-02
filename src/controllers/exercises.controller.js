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
  
  // POST /exercises
  createExercise: (req, res) => {
    const { name, description, categoria, grupoMuscular } = req.body;

    if (!name || !description || !categoria || !grupoMuscular) {
      return res.status(400).json({ 
        error: 'Name, description, categoria y grupoMuscular son requeridos' 
      });
    }

    const newExercise = {
      id: `ex${exercises.length + 1}`,
      name,
      description,
      categoria,
      grupoMuscular
    };

    exercises.push(newExercise);
    res.status(201).json(newExercise);
  },
    // PUT /exercises/:id
  updateExercise: (req, res) => {
    const { id } = req.params;
    const { name, description, categoria, grupoMuscular } = req.body;

    const index = exercises.findIndex(ex => ex.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    if (!name || !grupoMuscular) {
      return res.status(400).json({ 
        error: 'Name y grupoMuscular son requeridos' 
      });
    }

    exercises[index] = {
      ...exercises[index],
      name,
      description,
      categoria,
      grupoMuscular
    };

    res.status(200).json(exercises[index]);
  },
  //PATCH
    partialUpdateExercise: (req, res) => {
    const { id } = req.params;

    const index = exercises.findIndex(ex => ex.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    const camposPermitidos = ['name', 'description', 'categoria', 'grupoMuscular'];
    const actualizacion = {};
    const camposModificados = [];

    camposPermitidos.forEach(campo => {
      if (req.body[campo] !== undefined) {
        actualizacion[campo] = req.body[campo];
        camposModificados.push(campo);
      }
    });

    if (camposModificados.length === 0) {
      return res.status(400).json({ 
        error: 'No se proporcionaron campos válidos para actualizar',
        camposPermitidos: camposPermitidos
      });
    }

    exercises[index] = {
      ...exercises[index],
      ...actualizacion
    };

    res.status(200).json({
      message: 'Ejercicio actualizado parcialmente',
      ejercicio: exercises[index],
    });
  }
};

module.exports = exerciseController;