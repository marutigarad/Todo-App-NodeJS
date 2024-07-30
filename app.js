const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

app.post('/addtask', (req, res) => {
    let newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect('/');
});

app.post('/removetask', (req, res) => {
    let taskToRemove = req.body.removetask;
    tasks = tasks.filter(task => task !== taskToRemove);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
