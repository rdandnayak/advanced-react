import express from 'express';
import config from './config';
import serverRender from './renderer/server';
import { data } from './testData';

const app = express();

function listenHandeler() {
  console.info(`Running on ${config.port}`);
}

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(config.port, listenHandeler);
