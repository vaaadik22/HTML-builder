const fs = require("fs");
const path = require('path');
const newFile = path.join(__dirname, 'project-dist', 'bundle.css');

fs.writeFile(newFile, '', error => {
    if (error) throw error
});

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
    if (error) {
        console.log(error.message)
    };

    files.forEach(f => {
        let fileName = path.join(__dirname, 'styles', f.name);

        fs.stat(fileName, (error, stats) => {
            if (error) {
                console.log(error);
            } else {
                let extname = path.extname(f.name);
                if (stats.isFile() && extname === '.css') {

                    fs.readFile(fileName, (err, data) => {
                        if (error) {
                            console.error(error)
                            return
                        }
                    fs.appendFile(newFile, data.toString(), error => {
                         if (error) throw error 
                        });
                    })
                }
            }
        });
    });
});