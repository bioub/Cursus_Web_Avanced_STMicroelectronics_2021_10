import express from 'express';
import cors from 'cors';
import http from 'http';

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    title: 'ABC',
    completed: true,
  },
  {
    id: 2,
    title: 'XYZ',
    completed: false,
  },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { ...req.body, id: Math.random() };

  todos.push(todo);

  res.status(201).json(todo);
});

app.delete('/todos/:todoId', (req, res) => {
  const todoId = +req.params.todoId;

  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({
      reason: 'Todo not found',
    });
  }

  const todoDeleted = todos[index];
  todos.splice(index, 1)

  res.json(todoDeleted);
});

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started : http://localhost:3000');
});

// Créer un application Express avec 3 routes :
// Avec les mêmes middlewares : cors() et express.json()

// Créer un script npm serve pour démarrer l'app via nodemon

// GET /todos -> retourne en JSON le tableau (Status 200 déjà par défaut)

// DELETE /todos/123 (où 123 est l'id de la todo)
// supprimer la TODO corresponde si elle existe (Status 200) retourner {} en JSON
// si la todo n'existe pas retourne un status 404
// Indice : pour supprimer d'un tableau on utilise la méthode splice (voir docs MDN)

// POST /todos avec en Body le JSON d'une todo (ex : {"title": "ABC", "completed": false})
// Générer un id (soit aléatoire soit différent du reste du tableau)
// Stocker la todo dans le tableau
// Retourner la todo créé (avec son id)
// Status 201
// const newTodo = {
//   id: 123,
//   ...oldTodo,
// };

// Reprendre le projet API Web TypeScript et changer les URL
// dans api.ts pour requeter votre serveur Express
