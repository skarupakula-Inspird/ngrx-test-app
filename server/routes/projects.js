const projectRoutes = (app, fs) => {
    // variables
    const dataPath = './data/projects.json';

    // READ
    app.get('/api/projects', (req, res) => {
        const basisPlatformNo = req.param("basisPlatformNo");
        console.log(basisPlatformNo);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            let projects = JSON.parse(data);

            if(basisPlatformNo) {
                projects = (projects || [])
                    .filter(project => project.basisPlatformNo == basisPlatformNo);
            }

            res.send(projects);
        });
    });

    // READ
    app.get('/api/projects/:id', (req, res) => {
        const projectId = req.param("id");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const projects = JSON.parse(data);
            const selectedProject = (projects || []).filter(p => p.number == projectId);
            res.send(selectedProject);
        });
    });

    // DELETE
    app.delete('/api/projects', (req, res) => {
        const basisPlatformNo = req.param("basisPlatformNo");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let projects = JSON.parse(data);

            if(basisPlatformNo) {
                projects = (projects || [])
                    .filter(project => project.basisPlatformNo != basisPlatformNo);
            }

            res.send(projects);
        });
    });
};

module.exports = projectRoutes;
