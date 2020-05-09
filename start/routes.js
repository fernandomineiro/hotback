'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/api/admin', 'AdminController.index') 
Route.get('/api/tipo', 'AdminController.tipo') 
Route.post('/api/pegartipo/:id', 'AdminController.pegartipo')
Route.post('/api/pegarproduto/:id', 'AdminController.pegarproduto')
Route.post('/api/pegarcarro/:id', 'AdminController.pegarcarro')
Route.post('/api/pegaproduto/:id', 'AdminController.pegaproduto')  
Route.get('/api/produto', 'AdminController.produto') 
Route.get('/api/carro', 'AdminController.carro') 
Route.post('/api/logar', 'AdminController.logar')
Route.post('/api/criartipo', 'AdminController.criartipo')
Route.post('/api/criarproduto', 'AdminController.criarproduto')
Route.post('/api/criarcarro', 'AdminController.criarcarro')
Route.put('/api/editartipo/:id', 'AdminController.editartipo')
Route.put('/api/editarproduto/:id', 'AdminController.editarproduto')
Route.put('/api/editarcarro/:id', 'AdminController.editarcarro')
Route.delete('/api/excluirtipo/:id', 'AdminController.excluirtipo')
Route.delete('/api/excluirproduto/:id', 'AdminController.excluirproduto')
Route.delete('/api/excluircarro/:id', 'AdminController.excluircarro')
