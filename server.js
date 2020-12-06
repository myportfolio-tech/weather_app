const express = require('express');
const app = express();

const entries = [{id: 1, name: 'course1'},
{id: 2, name: 'course2'},
{id: 3, name: 'course3'},
{id: 4, name: 'course4'}];


app.use(express.static('website'));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.get('/entries', (req, res) => {
    res.send(entries)
});

app.post('/entries', (req, res) => {

    const entry = {
        id: entries.length + 1,
        name: req.body.name
    };

    entries.push(entry);
    res.send(entry);
});

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));