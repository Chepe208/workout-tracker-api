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
  }
};

module.exports = workoutExerciseController;