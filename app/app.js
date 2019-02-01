const express = require('express');

const init = (data) => {
    const app = express();
    app.set('view engine', 'pug');
    app.use(express.static('static'));

    app.get('/', (req, res) => {
        res.render('intro/_intro');
    });


    return Promise.resolve(app);
}

module.exports = {
    init
}