import express from 'express';
import config from './config';

const app = express();

function listenHandeler() {
  console.info(`Running on ${config.port}`);
}

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(config.port, listenHandeler);
