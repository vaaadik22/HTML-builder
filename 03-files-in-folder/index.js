const fs = require('fs');
const path = require('path'); 

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (error, files) => {  
    if (error) {
        console.log(error.message) 
    };
    files.forEach((f, i) => {                                                       
        fs.stat(path.join(__dirname, 'secret-folder', f.name), (error, stats) => {
            if (error) {
                console.log(error);
            } else {
                if (stats.isFile()) {                                              
                    var basename = path.basename(f.name).replace(extname, '');
                    var extname = path.extname(f.name);
                    extname = extname.replace('.', '');
                    console.log(`${basename} - ${extname} - ${stats.size/1000}kb`); 
                }
            }
        });
    });
});