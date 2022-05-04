'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
  headers: {
    //'Cookie': 'ak_bmsc=26A93F5AFA3D3AC3261C19FF2EF764DE~000000000000000000000000000000~YAAQMyEPF/Y4zn2AAQAAHpwKgw/Ha+Jnjgr/YqA9rzLwr5rF05wpJrmCSha2nUt34+9kyqqfZTkg9c9rug+cCd4Zk4rK8V6pQHN2GgksJz6KtgYCyX8dGXV9sSb4WQ9sjHtrBznpkRupiu8g/dGcNtpPrcA65PAE55kCy8jI1qfvk5PWG++w9rAQ4t6GsKQCKKGpFzXFPViO1RbuGtp5/7lpW2Rj3f2SMQ+DOoIKqAhXm502xc+0AE7M7fUIJ+PtMigkG6uybCYhZ7cgTrYSw4cxzcXr82or2ZDbOcJLlLvFQX9AuycfSHuPmr5WByyXMOedeNbpixjtcWORSoGUG+YXOtCvK/FrdjMr2YYAOTSxfgrZSKxvx9PbJzul4Ao='
  }
};


const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.get('/data', async (req, res) => {
  try {
    var response = await axios(config)
    res.json(response.data)
  } catch (e) {
    res.json("Try again")
  }

  //res.json({ postBody: req.body })

});
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
