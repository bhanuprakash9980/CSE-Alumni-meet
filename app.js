const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('App started on port ' + PORT);
});
