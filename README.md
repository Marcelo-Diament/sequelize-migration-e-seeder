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

## Seeders

25. `npx sequelize-cli seed:generate --name demo-users`

26. `./server/database/seeders/{AAAAMMDDHHMMSS}-demo-users.js`:

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
                firstName: 'Fulano',
                lastName: 'de Tal',
                email: 'fulano@detal.com'
            },
            {
                firstName: 'Ciclano',
                lastName: 'de Tal',
                email: 'ciclano@detal.com'
            },
            {
                firstName: 'Beltrano',
                lastName: 'da Silva',
                email: 'beltrano@dasilva.com'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
```

27. `npx sequelize-cli seed:generate --name demo-todos`

28. `./server/database/seeders/{AAAAMMDDHHMMSS}-demo-todos.js`:

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Todos', [{
                title: 'To Do 01',
                excerpt: 'Resumo do To Do 01',
                description: 'Descrição completa do To Do 01'
            },
            {
                title: 'To Do 02',
                excerpt: 'Resumo do To Do 02',
                description: 'Descrição completa do To Do 02'
            },
            {
                title: 'To Do 03',
                excerpt: 'Resumo do To Do 03',
                description: 'Descrição completa do To Do 03'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Todos', null, {});
    }
};
```

29. `npx sequelize-cli seed:generate --name demo-statuses`

30. `./server/database/seeders/{AAAAMMDDHHMMSS}-demo-statuses.js`:

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Statuses', [{
                title: '01- A Desenvolver'
            },
            {
                title: '02 - Em Desenvolvimento'
            },
            {
                title: '03 - A Validar'
            },
            {
                title: '04 - Em Validação'
            },
            {
                title: '05 - Validado'
            },
            {
                title: '06 - A Ajustar'
            },
            {
                title: '07 - Finalizado'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Statuses', null, {});
    }
};
```

31. `npx sequelize-cli db:seed:all`

32. Use a query MySQL já ilustrada para ver os registros de cada tabela (use `Control + Shift + Enter` para ver todos os resultados de uma só vez e navegue entre as abas).

## Refatoração Migrations e Seeders com Association

### Undo

33. Reparou que os dados `createdAt` e `updatedAt` estão apenas com `0`? Vamos desfazer todos os seeds com:

 `npx sequelize-cli db:seed:undo:all`

(podemos passar `db:seed:undo` para desfazer o último ou `db:seed:undo --seed -nome-do-seed` para desfazer um específico).

34. Desfazendo as migrations: `npx sequelize-cli db:migrate:undo:all`.

### Update

Atualizando os arquivos:

35. Nos seeders vamos acrescentar a cada registro (usuário, status ou todo):

```js
{
    // ...
    createdAt: new Date(),
    updatedAt: new Date()
    // ...
}
```

36. E no seeder `todo` vamos acrescentar os campos `userId` e `statusId` (valores de acordo com usuários e status registrados).

37. Nos models vamos acrescentar (entre `sequelize,` e `modelName: 'nome'` essa nova opção: `timestamps: true, ` ).

38. No model `todo` vamos adicionar:

```js
{
    //...
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
}
```

39. Na migration `create-todo` vamos adicionar também dois novos campos:

```js
{
    //...
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    statusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'statuses',
            key: 'id'
        }
    },
    // ...
}
```

> ATENÇÃO: na documentação oficial do Sequelize, a orientação é outra, veja [aqui](https://sequelize.org/master/manual/migrations.html). Mas buscando no StackOverflow, vemos que o correto é passar o nome da tabela diretamente na propriedade model, veja a [issue aqui](https://stackoverflow.com/questions/60338378/sequelize-migration-fails-with-errno-150-foreign-key-constraint-is-incorrectly).

40. Por fim, ainda temos as associations nos models, onde indicamos os relacionamentos entre tabelas.

User:

```js
class User extends Model {
    static associate(models) {
        User.hasMany(models.Todo, {
            as: 'todos'
        })
    }
};
```

Status:

```js
class Status extends Model {
    static associate(models) {
        Status.hasMany(models.Todo, {
            as: 'todos'
        })
    }
};
```

Todo:

```js
class Todo extends Model {
    static associate(models) {
        Todo.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
        Todo.belongsTo(models.Status, {
            foreignKey: 'statusId',
            as: 'status'
        })
    }
};
```

## REVISÃO

Para facilitar, vamos revisar o model, migration e seeder de cada item:

### Users

`./server/config/migrations/{AAAAMMDDHHMMSS}-create-users.js` :

```js
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};
```

 `./server/config/models/users.js`

```js
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Todo, {
                as: 'todos'
            })
        }
    };
    User.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        timestamps: true,
        modelName: 'User',
    });
    return User;
};
```

 `./server/config/seeders/{AAAAMMDDHHMMSS}-demo-users.js`

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
                firstName: 'Fulano',
                lastName: 'de Tal',
                email: 'fulano@detal.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Ciclano',
                lastName: 'de Tal',
                email: 'ciclano@detal.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Beltrano',
                lastName: 'da Silva',
                email: 'beltrano@dasilva.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
```

### Status

`./server/config/migrations/{AAAAMMDDHHSS}-create-status.js` :

```js
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Statuses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Statuses');
    }
};
```

 `./server/config/models/status.js`

```js
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Status extends Model {
        static associate(models) {
            Status.hasMany(models.Todo, {
                as: 'todos'
            })
        }
    };
    Status.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING
    }, {
        sequelize,
        timestamps: true,
        modelName: 'Status',
    });
    return Status;
};
```

 `./server/config/seeders/{AAAAMMDDHHMMSS}-demo-statuses.js`

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Statuses', [{
                title: '01- A Desenvolver',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '02 - Em Desenvolvimento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '03 - A Validar',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '04 - Em Validação',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '05 - Validado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '06 - A Ajustar',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '07 - Finalizado',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Statuses', null, {});
    }
};
```

### Todo

`./server/config/migrations/{AAAAMMDDHHSS}-create-todo.js` :

```js
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Todos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            excerpt: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            statusId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'statuses',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Todos');
    }
};
```

 `./server/config/models/todo.js`

```js
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        static associate(models) {
            Todo.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            })
            Todo.belongsTo(models.Status, {
                foreignKey: 'statusId',
                as: 'status'
            })
        }
    };
    Todo.init({
        title: DataTypes.STRING,
        excerpt: DataTypes.STRING,
        description: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        statusId: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: true,
        modelName: 'Todo',
    });
    return Todo;
};
```

 `./server/config/seeders/{AAAAMMDDHHMMSS}-demo-todos.js`

```js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Todos', [{
                title: 'To Do 01',
                excerpt: 'Resumo do To Do 01',
                description: 'Descrição completa do To Do 01',
                userId: 1,
                statusId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'To Do 02',
                excerpt: 'Resumo do To Do 02',
                description: 'Descrição completa do To Do 02',
                userId: 2,
                statusId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'To Do 03',
                excerpt: 'Resumo do To Do 03',
                description: 'Descrição completa do To Do 03',
                userId: 3,
                statusId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Todos', null, {});
    }
};
```

### Finalização

Agora podemos desfazer todas as migrations e seeders e refazê-las:

 `npx sequelize-cli db:seed:undo:all`

 `npx sequelize-cli db:migrate:undo:all`

 `npx sequelize-cli db:migrate`

 `npx sequelize-cli db:seed:all`

Vale ainda checarmos via Workbench nossas tabelas, registros e execurar o `Reverse Engineering` para confirmarmos se os relacionamentos estão corretos.

O resultado do `SELECT * FROM ...` é algo como:

**users**

| id | firstName | lastName | email | createdAt | updatedAt |
| -- | --------- | -------- | ----- | --------- | --------- |
| 1 |	Fulano	| de Tal |	fulano@detal.com |	2021-11-02 20:09:28 |	2021-11-02 20:09:28 |
| 2 |	Ciclano	| de Tal |	ciclano@detal.com |	2021-11-02 20:09:28 |	2021-11-02 20:09:28 |
| 3 |	Beltrano	| da Silva |	beltrano@dasilva.com |	2021-11-02 20:09:28 |	2021-11-02 20:09:28 |

**statuses**

| id | title | createdAt | updatedAt |
| -- | ----- | --------- | --------- |
| 1  |	01 - A Desenvolver |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 2  |	02 - Em Desenvolvimento |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 3  |	03 - A Validar |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 4  |	04 - Em Validação |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 5  |	05 - Validado	| 2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 6  |	06 - A Ajustar |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 7  |	07 - Finalizado	| 2021-11-02 20:09:28 |	2021-11-02 20:09:28 |

**todos**

| id | title | excerpt | description | userId | statusId | createdAt | updatedAt |
| -- | ----- | ------- | ----------- | ------ | -------- | --------- | --------- |
| 1  |	To Do 01 |	Resumo do To Do 01 |	Descrição completa do To Do 01	| 1	| 1 |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 2  |	To Do 02 |	Resumo do To Do 02 |	Descrição completa do To Do 02	| 2	| 2 |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |
| 3  |	To Do 03 |	Resumo do To Do 03 |	Descrição completa do To Do 03	| 3	| 3 |	2021-11-02 20:09:28	| 2021-11-02 20:09:28 |