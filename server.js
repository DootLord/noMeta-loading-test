const fs = require('fs');
const https = require('https');

const express = require('express');
const path = require('path');
const app = express();
const certs = {
  key: fs.readFileSync('/etc/letsencrypt/live/dootlord.meme/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dootlord.meme/cert.pem')
}

// app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
  res.send("ayo whats up man");
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(certs, app);

httpServer.listen(80, () => {
  console.log('HTTPS Server running on port 80');
});

// httpsServer.listen(443, (err) => {
//   if (err) {
//     console.error('Failed to start HTTPS Server:', err);
//   } else {
//     console.log('HTTPS Server running on port 443');
//   }
// });

