const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static("client/build"));
// }

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})