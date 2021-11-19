interface Todo {
  id?: number;
  title: string;
  completed: boolean;
};

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

// Reprendre le projet API Web TypeScript et changer les URL
// dans api.ts pour requeter votre serveur Express
