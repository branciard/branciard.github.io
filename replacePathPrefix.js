

const globby = require('globby');
const replace = require('replace-in-file');
const fs = require('fs-extra');

const listBlogsMDFiles = dir => globby(`./blog/**/*.md`);



const backupFile = async file => {
    const oriExist = await fs.pathExists(file+".ori");
    if(!oriExist){
        await fs.copy(file, file+".ori")
    }
    return;
}

const replacePathPrefix = async ( file , prefix ) => {
    console.log(file)
    const options = {
        files: file,
        from:/__PATH_PREFIX__/g,
        to: prefix,
    };
    return await replace(options);
}

(async () => {
  const defaultPathPrefix = '';
  const pathPrefix = process.env.PATH_PREFIX ? process.env.PATH_PREFIX : defaultPathPrefix;
  const result = await listBlogsMDFiles(process.cwd());
  console.log("backup original files");
  result.map(file  => backupFile(file));
  console.log("replace __PATH_PREFIX__ with :["+pathPrefix+"] in files:");
  result.map(file  => replacePathPrefix(file,pathPrefix));
  console.log("replace __PATH_PREFIX__ with :["+pathPrefix+"] in config/SiteConfig.ts:");
  await backupFile('./config/SiteConfig.ts')
  await replacePathPrefix('./config/SiteConfig.ts',pathPrefix);

})();