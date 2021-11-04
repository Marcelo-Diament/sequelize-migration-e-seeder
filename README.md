# Sequelize - Migration e Seeder

> Projeto com node.js, Express, ExpressGenerator, EJS, Sequelize e MySQL

## Setup

01. `npm install express-generator -g`

02. `express server --view=ejs`

03. `cd server && npm install --save sequelize mysql2 && npm install --save -D nodemon sequelize-cli`

04. `package.json:6`? `"start": "nodemon ./bin/www"`

05. `npm install`

06. `npm run start`, `localhost:3000`

## Users e Todos

Criando rotas, controllers e views para usuários e To Dos.

07. `app.js:9`: `var todosRouter = require('./routes/todos');`

08. `app.js:25`: `app.use('/todos', todosRouter);`

09. `./server/routes/todos.js`:

```js
const express = require('express'),
    router = express.Router(),
    todosController = require('../controllers/todos.js')

router.get('/', todosController.index)

module.exports = router
```

10. `./server/controllers/todos.js`:

```js
const controller = {
    index: (req, res, next) => {
        res.render('todos', {
            title: 'To Dos'
        })
    }
}

module.exports = controller
```

11. `./server/views/todos.ejs`:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
  </body>
</html>
```

12. `./server/controllers/users.js`:

```js
const controller = {
    index: (req, res, next) => {
        res.render('users', {
            title: 'Users'
        })
    }
}

module.exports = controller
```

13. `./server/routes/users.js`:

```js
const express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/users')

router.get('/', usersController.index);

module.exports = router;
```

14. `./server/views/users.ejs`:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
  </body>
</html>
```

## Banco de Dados

15. Ativar xampp > MySQL

16. Abrir Workbench e criar BD `sequelize_03_todo`:

```sql
CREATE DATABASE sequelize_03_todo;
```

17. `./server/.sequelizerc`:

```js
const path = require('path')
module.exports = {
    config: path.resolve('./database/config', 'config.js'),
    'models-path': path.resolve('./database/models'),
    'seeders-path': path.resolve('./database/seeders'),
    'migrations-path': path.resolve('./database/migrations'),
}
```

18. `npx sequelize init`

19. `./server/database/config.js`:

```js
module.exports = {
    "development": {
        "username": "root",
        "password": null,
        "database": "sequelize_03_todo",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "sequelize_03_todo",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "sequelize_03_todo",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

## Models e Migrations


20. `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

21. `npx sequelize-cli model:generate --name Status --attributes title:string`

22. `npx sequelize-cli model:generate --name Todo --attributes title:string,excerpt:string,description:string`

23. `npx sequelize-cli db:migrate`

24. Abrir Workbench - repare que há as tabelas `users`, `todos`,  `statuses` e `sequelizemeta`.

```sql
-- CREATE DATABASE sequelize_03_todo;
USE sequelize_03_todo;

DESCRIBE sequelizemeta;
SELECT * FROM sequelizemeta;

DESCRIBE users;
SELECT * FROM users;

DESCRIBE todos;
SELECT * FROM todos;

DESCRIBE statuses;
SELECT * FROM statuses;
```
