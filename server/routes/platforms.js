const platformRoutes = (app, fs) => {
    // variables
    const dataPath = './data/platforms.json';

    // READ
    app.get('/api/platforms', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/api/platforms/:id', (req, res) => {
        const platformId = req.param("id");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const platforms = JSON.parse(data);
            const selectedPlatform = (platforms || []).filter(p => p.number == platformId);
            res.send(selectedPlatform);
        });
    });

    // DELETE
    app.delete('/api/platforms/:id', (req, res) => {
        const platformId = req.param("id");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let  platforms = JSON.parse(data);
            platforms = (platforms || []).filter(p => p.number != platformId);
            res.send(platformId);
        });
    });
};

module.exports = platformRoutes;
