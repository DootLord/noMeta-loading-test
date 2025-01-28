const fs = require('fs');
const https = require('https');

const express = require('express');
const path = require('path');
const app = express();
const certs = {
  key: fs.readFileSync('/etc/letsencrypt/live/dootlord.meme/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dootlord.meme/fullchain.pem')
}

app.use(express.static(path.join(__dirname, 'static')));

https.createServer(certs, app).listen(80, () => {
  console.log('Server started on https://localhost:80');
});

