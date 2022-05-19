const fs = require('fs');
const path = require('path');
const folderFiles = 'files';
const folderCopy = 'files-copy';

fs.mkdir(path.join(__dirname, folderCopy), {
    recursive: true}, error => {
    if (error) throw err;
})

fs.readdir(path.join(__dirname, folderCopy), {
    withFileTypes: true}, (error, files) => {
    if (error) {
        console.log(error.message)
    };

    files.forEach(f => {
        fs.unlink(path.join(__dirname, folderCopy, f.name), (error) => {
            if (error) throw error});
    });
});

fs.readdir(path.join(__dirname, folderFiles), { withFileTypes: true }, (error, files) => {
    if (error) { console.log(error.message) };
    files.forEach(f => {
        fs.copyFile(path.join(__dirname, folderFiles, f.name), path.join(__dirname, folderCopy, f.name), (error) => {
            if (error) throw error});
    });
});
