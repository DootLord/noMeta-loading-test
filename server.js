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

const httpsServer = https.createServer(certs, app);

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 80');
});

