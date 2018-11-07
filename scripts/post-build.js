const fs = require('fs');
const concat = require('concatenate');

setTimeout(() => {
  concatJSFiles();
  copyElementsAssetsToDocumentationFolder();
  copyDemosToDocumentationFolder();
  copyDemoAssetsToDocumentationFolder();
}, 0);

const concatJSFiles = () => {
  concat.sync([
    './dist/ta-com-catalog/runtime.js',
    './dist/ta-com-catalog/polyfills.js',
    './dist/ta-com-catalog/main.js'
  ], './dist/ta-com-catalog/custom-elements.js');
};

const copyElementsAssetsToDocumentationFolder = () => {
  if (!fs.existsSync('./documentation')) fs.mkdirSync('./documentation');
  if (!fs.existsSync('./documentation/custom-elements')) fs.mkdirSync('./documentation/custom-elements');
  if (!fs.existsSync('./documentation/custom-elements/demos')) fs.mkdirSync('./documentation/custom-elements/demos');
  if (!fs.existsSync('./documentation/custom-elements/demos/assets')) fs.mkdirSync('./documentation/custom-elements/demos/assets');
  copyFileSync('./dist/ta-com-catalog/custom-elements.js', './documentation/custom-elements/custom-elements.js');
  copyFileSync('./dist/ta-com-catalog/styles.css', './documentation/custom-elements/styles.css');
};

const copyDemosToDocumentationFolder = () => {
  fs.readdirSync('./src/app/components/').forEach(moduleDirectoryName => {
    fs.readdirSync(`./src/app/components/${moduleDirectoryName}`).forEach(componentDirectoryName => {
      if (!fs.lstatSync(`./src/app/components/${moduleDirectoryName}/${componentDirectoryName}`).isDirectory()) return;
      fs.readdirSync(`./src/app/components/${moduleDirectoryName}/${componentDirectoryName}`).forEach(fileName => {
        if (fileName.endsWith('.demo.html')) {
          const componentName = fileName.match(/^(.*)\.component\.demo\.html$/)[1];
          let fileContents = fs.readFileSync(`./src/app/components/${moduleDirectoryName}/${componentDirectoryName}/${fileName}`, 'utf8');
          fileContents += BOILER_PLATE_DEMO_HTML(componentName);
          fs.writeFileSync(`./documentation/custom-elements/demos/${fileName}`, fileContents, 'utf8');
        }
      });
    });
  });
};

const copyDemoAssetsToDocumentationFolder = () => {
  fs.readdirSync('./src/assets/').forEach(fileName => {
    copyFileSync(`./src/assets/${fileName}`, `./documentation/custom-elements/demos/assets/${fileName}`, 'binary');
  });
};

const copyFileSync = (srcFileName, destFileName, format = 'utf8') => {
  const srcFileContents = fs.readFileSync(srcFileName, format);
  fs.writeFileSync(destFileName, srcFileContents, format);
  console.log(`${srcFileName} -> ${destFileName} [copied]`);
};

const BOILER_PLATE_DEMO_HTML = (componentName) => `
  <a href="/custom-elements/demos/${componentName}.component.demo.html" target="_blank" style="margin-top: 24px">OPEN IN NEW WINDOW</a>
  <link rel="stylesheet" href="/custom-elements/styles.css"></head>
  <script type="text/javascript" src="/custom-elements/custom-elements.js"></script>
`;
