require('./db').init()
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(3001, () => console.log('at 3001'));
    })