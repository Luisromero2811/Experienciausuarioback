'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//Ruta para loguear
Route.post('/login','AuthController.login')
//Ruta para registrar nuevo usuario con método encapsulado de rutas "resource"
Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [['users.store'],['RegistroUser']]
  ]))
//Ruta POST para registrar nuevos alumnos 
//Route.post('/registroalumnos','StudentController.registro')
//Ruta POST para registrar el pago mensual de los alumnos
//Route.post('/pagos','PaymentController.registro')
//Ruta para GET para traer los datos del alumno 
//Route.post('/historial','DatumController.datos')
//Ruta GET para traer listas de alumnado por deporte
//Route.post('/listado','ListController.datos')