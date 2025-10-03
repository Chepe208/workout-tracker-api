let workoutExercises = [ 
  {
    id: "1",
    workoutId: "101",
    exerciseId: "ex1",
    series: 4,
    repeticiones: 10,
    peso: 60
  },
  {
    id: "2", 
    workoutId: "102",
    exerciseId: "ex2",
    series: 3,
    repeticiones: 8,
    peso: 70
  }
];

// Controladores
const workoutExerciseController = {
  // GET /workout-exercises/:id
  getWorkoutExerciseById: (req, res) => {
    const { id } = req.params;
    const exercise = workoutExercises.find(we => we.id === id);  

    if (!exercise) {
      return res.status(404).json({ error: 'Ejercicio de entrenamiento no encontrado' });
    }

    res.status(200).json(exercise);
  },

  // GET /workout-exercises - buscar por workoutId, exerciseId
  getWorkoutsExercises: (req, res) => {
    const { workoutId, exerciseId } = req.query;  
    let result = workoutExercises; 

    if (workoutId) {
      result = result.filter(we => we.workoutId === workoutId);
    }

    if (exerciseId) {
      result = result.filter(we => we.exerciseId === exerciseId);
    }

    res.status(200).json(result);
  },

  // POST /workouts/:workoutId/exercises
CreateExerciseworkout: (req, res) => {
const {workoutId, exerciseId, series, repeticiones, peso } = req.body;

  if (!exerciseId || !series || !repeticiones) {
    return res.status(400).json({
      error: 'exerciseId, series y repeticiones son requeridos'
    });
  }

  const newWorkoutExercise = {
    id: `${workoutExercises.length + 1}`,
    workoutId,
    exerciseId,
    series: parseInt(series),
    repeticiones: parseInt(repeticiones),
    peso: peso ? parseInt(peso) : 0
  };

  workoutExercises.push(newWorkoutExercise);
  res.status(201).json(newWorkoutExercise);
},
  // PUT /workoutsExercises/:id
  updateWorkoutExercise: (req, res) => {
    const { id } = req.params;
    const { series, repeticiones, peso } = req.body;

    const index = workoutExercises.findIndex(we => we.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Ejercicio de entrenamiento no encontrado' });
    }

    if (!series || !repeticiones) {
      return res.status(400).json({ 
        error: 'series y repeticiones son requeridos' 
      });
    }

    workoutExercises[index] = {
      ...workoutExercises[index],
      series: parseInt(series),
      repeticiones: parseInt(repeticiones),
      peso: peso ? parseInt(peso) : workoutExercises[index].peso
    };

    res.status(200).json(workoutExercises[index]);
  },

  // PATCH /workoutsExercises/:id
 partialUpdateWorkoutExercise: (req, res) => {
  const { id } = req.params;
  const exercise = workoutExercises.find(we => we.id === id);

  if (!exercise) {
    return res.status(404).json({ error: 'Ejercicio de entrenamiento no encontrado' });
  }

  // Actualizar solo campos enviados en el body
  const camposActualizables = ['series', 'repeticiones', 'peso'];
  camposActualizables.forEach(campo => {
    if (req.body[campo] !== undefined) {
      exercise[campo] = parseInt(req.body[campo]);
    }
  });

  res.status(200).json(exercise);
},

  // DELETE /workoutsExercises/:id
  deleteWorkoutExercise: (req, res) => {
    const { id } = req.params;
    const index = workoutExercises.findIndex(we => we.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Ejercicio de entrenamiento no encontrado' });
    }

    const deletedExercise = workoutExercises.splice(index, 1);
    res.status(200).json({ 
      message: 'Ejercicio eliminado del entrenamiento correctamente',
      deleted: deletedExercise[0].id 
    });
  },
};

module.exports = workoutExerciseController;