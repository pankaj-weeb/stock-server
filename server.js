const express = require('express')
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



const app = express();
const port = 4000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', async (req, res) => {
    try {
        var response = await axios(config)
        res.json(response.data)
    } catch (e) {
        res.json("Try again")
    }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));