const configRoutes = (app, fs) => {
    // variables
    const dataPath = './data/configuration.json';

    // READ
    app.get('/api/configuration', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // READ
    app.get('/api/configuration/:module', (req, res) => {
        const moduleName = req.param("module");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const modules = JSON.parse(data);
            const selectedModule = (modules || [])
                .filter(p => p.moduleName.toLowerCase() == moduleName.toLowerCase());
            res.send(selectedModule);
        });
    });
};

module.exports = configRoutes;
