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
