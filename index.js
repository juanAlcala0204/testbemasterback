const express = require('express');
const app = express();
const cors = require('cors')
const { config } = require('./config/index');
const UniversityApi = require('./app/routes/index');

app.use(cors())
app.use(express.json());
//Routes
app.use(UniversityApi(app));

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});
