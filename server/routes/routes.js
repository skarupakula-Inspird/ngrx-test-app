
const platformRoutes = require('./platforms');
const projectRoutes = require('./projects');
const configRoutes = require('./config');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // run our user route module here to complete the wire up
    platformRoutes(app, fs);
    projectRoutes(app, fs);
    configRoutes(app, fs);
};

module.exports = appRouter;
