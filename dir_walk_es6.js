const fs = require('fs').promises;
const path = require('path');

async function walk(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if(stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

const getData = async () => {
    return (await Promise.all()).
    catch(() => {})
}

walk('C:\\Temp\\Temp_sub_dir').then( data => {
    console.log(data)
})