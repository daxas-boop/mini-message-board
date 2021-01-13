const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000 || process.env.PORT;
const hbs = exphbs.create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  defaultLayout: 'main',
});

hbs.handlebars.registerHelper('timeDifference', (time) => {
  const today = new Date();
  const MS_PER_MIN = 60000;
  const timeDiff = Math.floor((today - time) / MS_PER_MIN);
  return timeDiff;
});

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`App listenting at http://localhost:${PORT}`);
});
