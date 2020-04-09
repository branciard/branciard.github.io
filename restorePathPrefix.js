

const globby = require('globby');
const fs = require('fs-extra');
var path = require('path');

const listBlogsMDFiles = dir => globby(`./blog/**/*.md.ori`);

const restoreFile = async file => {
    const filename = path.basename(file);
    console.log("restore file : "+file + " to:" );
    console.log( path.dirname(file)+"/"+filename.substr(0, filename.lastIndexOf("."))) 
    await fs.copy(file,path.dirname(file)+"/"+filename.substr(0, filename.lastIndexOf(".")));
    await fs.remove(file);
    return;
}

(async () => {
  const result = await listBlogsMDFiles(process.cwd());
  result.map(file  => restoreFile(file));
  await restoreFile('./config/SiteConfig.ts.ori')
})();