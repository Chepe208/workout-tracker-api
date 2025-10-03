# Problema y Solución: Evolución del Endpoint de Usuarios

Al comenzar con el desarrollo de la API, teníamos un endpoint básico `GET /users` que simplemente devolvía todos los usuarios. 
El problema surgió cuando quisimos hacerlo más inteligente, agregando la capacidad de filtrar usuarios por rol y buscar por nombre.

**El conflicto**
- Ya existía un `GET /users` que devolvía todos los usuarios
- Intentamos agregar otro `GET /users` con filtros en la parte inferior del archivo  
- **Resultado:** Express siempre ejecutaba la primera ruta e ignoraba completamente la segunda

**Solucion**
Se unio todo en un solo endpoint que responde de forma diferente según los parámetros que se le da.
La misma ruta puede mostrar todos los usuarios, filtrarlos por tipo, buscar por nombre, o combinar ambos filtros, haciendolo mas organizado

# Endpoints de la API Workout Tracker

## Usuarios

- `GET /api/users` - Listar usuarios (con filtros: `role`, `search`)  
- `GET /api/users/:id` - Obtener usuario específico  
- `POST /api/users` - Crear nuevo usuario  
- `PUT /api/users/:id` - Actualización completa  
- `PATCH /api/users/:id` - Actualización parcial  
- `DELETE /api/users/:id` - Eliminar usuario  

---

## Entrenamientos

- `GET /api/workouts` - Listar entrenamientos (filtros: `usuarioId`, `fecha`)  
- `GET /api/workouts/:id` - Obtener entrenamiento específico  
- `POST /api/workouts` - Crear nuevo entrenamiento  
- `PUT /api/workouts/:id` - Actualización completa  
- `PATCH /api/workouts/:id` - Actualización parcial  
- `DELETE /api/workouts/:id` - Eliminar entrenamiento  

---

## Ejercicios

- `GET /api/exercises` - Listar ejercicios (filtros: `categoria`, `grupoMuscular`, `search`)  
- `GET /api/exercises/:id` - Obtener ejercicio específico  
- `POST /api/exercises` - Crear nuevo ejercicio  
- `PUT /api/exercises/:id` - Actualización completa  
- `PATCH /api/exercises/:id` - Actualización parcial  
- `DELETE /api/exercises/:id` - Eliminar ejercicio  

---

## Ejercicios de Entrenamiento

- `GET /api/workoutExercises` - Listar relaciones (filtros: `workoutId`, `exerciseId`)  
- `GET /api/workoutExercises/:id` - Obtener relación específica  
- `POST /api/workoutExercises` - Agregar ejercicio a entrenamiento  
- `PUT /api/workoutExercises/:id` - Actualización completa  
- `PATCH /api/workoutExercises/:id` - Actualización parcial  
- `DELETE /api/workoutExercises/:id` - Eliminar entrenamiento de ejercicio

---

## Progreso

- `GET /api/progress` - Listar progreso (filtros: `usuarioId`, `workoutId`, `fecha`)  
- `GET /api/progress/:id` - Obtener progreso específico  
- `POST /api/progress` - Registrar entrenamiento completado  
- `DELETE /api/progress/:id` - Eliminar registro de progreso  

---

## Reportes

- `GET /api/reports` - Listar reportes (filtros: `usuarioId`, `periodo`)  
- `GET /api/reports/:id` - Obtener reporte específico  
- `POST /api/reports` - Generar nuevo reporte  
- `DELETE /api/reports/:id` - Eliminar reporte  
