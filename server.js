const express = require('express');
const app = express();


app.use(express.static('website'));

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));