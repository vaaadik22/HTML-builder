const path = require('path');
const { rm, mkdir, readdir, copyFile, readFile, writeFile } = require('fs');
const progectDist = path.join(__dirname, 'progect-dist');
const components = path.join(__dirname, 'components');
const styles = path.join(__dirname, 'styles');
const assets = path.join('assets');

const prepareFolder = async () => {
    return rm(destFolder, { force: true, recursive: true, maxRetries: 100 })  
      .then(() => mkdir(destFolder, { recursive: true }))  
      .catch(err => console.log('PrepareFolder', error));
  };
