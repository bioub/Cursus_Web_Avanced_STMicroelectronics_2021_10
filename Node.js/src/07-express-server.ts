import express from 'express';
import cors from 'cors';

const app = express();

 // enregistre un middleware (plugin)
app.use(cors()); // autorise les requetes cross-origin
app.use(express.json()); // parse le body si JSON

app.get('/', (req, res) => {
  res.send('<h2>Hello Express !!!</h2>'); // .end
});

app.get('/api/user', (req, res) => {
  res.json({  // .end
    id: 1,
    name: 'ABC',
  });
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`<h2>Hello ${name}</h2>`);
});

app.post('/login', (req, res) => {
  const body = req.body; // {title: 'ABC', completed: false}

  res.json(body);
});


// app.delete
// app.post

app.listen(8080, () => {
  console.log('server started');
});
