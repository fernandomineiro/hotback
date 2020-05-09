'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with admins
 */
const Database = use('Database')
class AdminController {
  
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('usuario')
    return response.json(a)
  }

  async tipo ({ request, response, view }) {
    const a = await Database.select('*').from('tipo')
    return response.json(a)
  }

  async carro ({ request, response, view }) {
    const a = await Database.select('*').from('carro')
    return response.json(a)
  }

  async produto ({ request, response, view }) {
    const a = await Database.raw(`SELECT tipo.tipo, produto.id, produto.nome, produto.valor 
    FROM tipo
    INNER JOIN produto ON tipo.id = produto.id_tipo`)
    return response.json(a)
  }
 
  
  async logar ({ request, response, view }) {
    const usuario = request.input('usuario');
    const senha = request.input('senha');
    const a = await Database.raw(` select nome from usuario where usuario='${usuario}'  and senha = '${senha}'`)
    return response.json(a)

  }

  
  async criartipo ({ request, response }) {
    const tipo = request.input('tipo');
    const a = await Database.raw(` INSERT INTO tipo (tipo) VALUES ('${tipo}') `)
    return response.json(a)
  }

  async criarproduto ({ request, response }) {
    const nome = request.input('nome');
    const valor = request.input('valor');
    const tipo = request.input('tipo');
    const a = await Database.raw(` INSERT INTO produto (nome, valor, id_tipo) VALUES ('${nome}', '${valor}', '${tipo}') `)
    return response.json(a)
  }

  async criarcarro ({ request, response }) {
    const nome = request.input('nome');
    const endereco = request.input('endereco');
    const numero = request.input('numero');
    const cidade = request.input('cidade');
    const informacao = request.input('informacao');
    const a = await Database.raw(` INSERT INTO carro (nome, endereco, numero,
      cidade, informacao) VALUES ('${nome}', '${endereco}', '${numero}', '${cidade}', '${informacao}') `)
    return response.json(a)
  }

  async editartipo ({ params, request, response }) {
    const tipo = request.input('tipo');
    const id = params.id;   
    const a = await Database.raw(` UPDATE tipo set tipo='${tipo}' WHERE id = '${id}'`)
    return response.json(a)
  }

  async editarproduto({ params, request, response }) {
    const nome = request.input('nome');
    const valor = request.input('valor');
    const tipo = request.input('tipo');
    const id = params.id;   
    const a = await Database.raw(` UPDATE produto set nome='${nome}', valor='${valor}', rua='${rua}' WHERE id = '${id}'`)
    return response.json(a)
  }

  async editarcarro ({ params, request, response }) {
    const nome = request.input('nome');
    const endereco = request.input('endereco');
    const numero = request.input('numero');
    const cidade = request.input('cidade');
    const informacao = request.input('informacao');
    const id = params.id;   
    const a = await Database.raw(` UPDATE carro set nome='${nome}', endereco='${endereco}', numero='${numero}',
    cidade='${cidade}', informacao='${informacao}' WHERE id = '${id}'`)
    return response.json(a)
  }




  async excluirtipo ({ params, request, response, view }) {
    const id = params.id;   
    const a = await Database.raw(` DELETE FROM tipo WHERE id = '${id}'`)
    return response.json(a)
  }

  async excluircarro ({ params, request, response, view }) {
    const id = params.id;   
    const a = await Database.raw(` DELETE FROM carro WHERE id = '${id}'`)
    return response.json(a)
  }

  async pegartipo ({ params, request, response, view }) {
    const id = params.id; 
    const a = await Database.raw(` SELECT * FROM tipo WHERE id = '${id}'`)
    return response.json(a)
  }

  async pegarcarro ({ params, request, response, view }) {
    const id = params.id; 
    const a = await Database.raw(` SELECT * FROM carro WHERE id = '${id}'`)
    return response.json(a)
  }

  async pegaproduto ({ params, request, response, view }) {
    const id = params.id; 
    const a = await Database.raw(` SELECT * FROM produto WHERE id_tipo = '${id}'`)
    return response.json(a)
  }

  
  async excluirproduto ({ params, request, response, view }) {
    const id = params.id   
    const a = await Database.raw(` DELETE FROM produto WHERE id ='${id}' `)
    return response.json(a)
  }

  async pegarproduto ({ params, request, response, view }) {
    const id = params.id   
    const a = await Database.raw(` SELECT * FROM produto WHERE id = '${id}'`)
    return response.json(a)
  }


  
  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AdminController
