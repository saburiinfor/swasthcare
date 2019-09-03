const express = require('express');
const path = require('path');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
//
// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });
//
// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(9000);