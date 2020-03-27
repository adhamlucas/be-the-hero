const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

/**
 * Rota / Recurso,
 * http://localhost/users, o /users após o localhost também é chamado de recurso, então estamos buscando por aquele recurso, no caso, /users
 */

 /**
  * Métoos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: ALterar uma informação no back-end
  * DELETE: Deltar uma informação no back-end
  */

  /**
   * TIPOS DE PARÂMETROS:
   * 
   * Query Params:Parâmetros nomeados enviados na rota após o símbolo de interrogação "?" (Filtros, paginação)
   *    Exemplo:
   *        Se quisessemos usar filtrar de uma lista de usuários só aqueles que tem o nome Adham
   *        http://localhost:3333/users?name=Adham
   *    
   *        Com Paginação:
   *            http://localhost:3333/users?page=2&name=Adham&idade=20
   *    
   *    Como acessar os Query Params na aplicação?
   *        O request guarda todos os dados que vem através da requisição do usuário, então para acessar os parametros vindo da requsição:
   *        const params = request.query;
   * 
   * Route Params: Parâmetros utilizados para identificar recursos
   *    Serve para pegar dados de um único usuário ou de um recursos específico
   *        /users/:id
   *    
   *    Como acesasr os Route Params na aplicação:
   *        Da mesma forma, o request guarda todos os dados da requisição do usuário, então para acessar os ROUTE Params, que são específicos para um recurso, faz:
   *        const params = request.params;
   * Request Body: È o Corpo da requisição, utilizado para criar ou alterar recursos
   *    
   */

    /**
     * Se enviarmos dados de criação de usuário mandando um JSON:
     *  {
     *      "name": "Adham Lucas",
     *      "idade": 20
     *  }
     * A aplicação não vai conseguir reconhecer que é um JSON
     * Para fazer a aplicação entender que está sendo passado um JSON no corpo da requisição, coloca no topo do código antes das requisições:
     *  app.use(express.json());
     * 
     * Para acesasr o corpo:
     * request.body;
     */

     /**
      * SQL: MySQL, SQLite, POstrgreeSQL, Oracle, Microsoft SQL Server
      * NOSQL: MongoDB, CouchDB etc
      * 
      * Vamos usar SQLite, pois ele é leve e dá para usar sem instalar algo.
      */

    /**
     * Estratégias de uso de banco de dados
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);


/**
 * Para instalar uma dependencia node só para fins de desenvolvimento
 * você usa npm install nome-do-pacote -D
 * o -D no final faz com que a dependencia seja instalada como devDependencies, assim será usada somenete quando em desenvolvimento.
 */


 /**
  * Entidades da aplicação:
  *     ONG
  *     Caso (incident)
  * Funcionalidades da aplicação:
  *     Login da ONG
  *     Cadastro de ONG
  *     Logout ONG
  *     Cadastrar novos Casos
  *     Deletar Casos
  *     Listar casos específicos de uma ONG
  *     Listar todos os casos
  *     Entrar em Contato com a ONG
  */