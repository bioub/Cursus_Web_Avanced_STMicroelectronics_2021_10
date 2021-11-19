import axios from 'axios';

async function request() {
  const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(todos);
}

request();
