const fs = require('fs');
const path = require('path');
const concat = require('concatenate');

setTimeout(function main() {
  bundleJS();
  ensureDocsDirs();
  copyAssetsToDocs();
  copyDemosToDocs();
}, 0);

const DIST_DIR_PATH = 'dist/ta-com-angular-elements';
const DOCS_DIR_PATH = 'documentation';
const DOCS_STYLES_DIR_PATH = 'styles';
const DOCS_JS_DIR_PATH = 'js';
const DOCS_ASSETS_DIR_PATH = 'assets';
const DOCS_DEMOS_DIR_PATH = 'demos';
const JS_BUNDLE_NAME = 'ta-com-elements.js';
const COPIED_CSS_NAME = 'ta-com-elements.css';
const ASSETS_SRC_DIR = 'src/assets';
const COMPONENTS_SRC_DIR = 'src/app/components';

const DEMO_SUFFIX = '.demo.html';
const FULLSCREEN_DEMO_SUFFIX = '.demo.fullscreen.html';

const ASSET_FILE_EXTENSIONS = [
  'jpg',
];

const bundleJS = () => {
  concat.sync([
    path.join(DIST_DIR_PATH, 'runtime.js'),
    path.join(DIST_DIR_PATH, 'polyfills.js'),
    path.join(DIST_DIR_PATH, 'main.js'),
  ], path.join(DIST_DIR_PATH, JS_BUNDLE_NAME));
};

const ensureDocsDirs = () => {
  fs.ensureDirSyncWithLogs(DOCS_DIR_PATH);
  fs.ensureDirSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_STYLES_DIR_PATH));
  fs.ensureDirSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_JS_DIR_PATH));
  fs.ensureDirSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_ASSETS_DIR_PATH));
  fs.ensureDirSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_DEMOS_DIR_PATH));
};

const copyAssetsToDocs = () => {
  fs.copyFileSyncWithLogs(path.join(DIST_DIR_PATH, JS_BUNDLE_NAME), path.join(DOCS_DIR_PATH, DOCS_JS_DIR_PATH, JS_BUNDLE_NAME));
  fs.copyFileSyncWithLogs(path.join(DIST_DIR_PATH, 'styles.css'), path.join(DOCS_DIR_PATH, DOCS_STYLES_DIR_PATH, COPIED_CSS_NAME));
  fs.readdirSync(ASSETS_SRC_DIR).forEach(fileName => {
    if (ASSET_FILE_EXTENSIONS.some(extension => fileName.endsWith(`.${extension}`))) {
      fs.copyFileSyncWithLogs(path.join(ASSETS_SRC_DIR, fileName), path.join(DOCS_DIR_PATH, DOCS_ASSETS_DIR_PATH, fileName));
    }
  });
};

const copyDemosToDocs = () => {
  fs.readdirRecursiveSync(COMPONENTS_SRC_DIR).forEach(fileName => {
    if (!fileName.endsWith('.component.ts')) return;

    const componentName = fileName.match(/^.*\/(.*)\.component\.ts$/)[1];
    const fileContents = fs.readFileSync(path.join(COMPONENTS_SRC_DIR, fileName), 'utf8');
    const demoHTMLMatch = fileContents.replace(/\n/g, '').match(/```html(.*)```/);
    const demoHTML = demoHTMLMatch ? GET_DEMO_HTML(componentName, demoHTMLMatch[1]) : '';
    const fullScreenDemoHTML = demoHTMLMatch ? GET_DEMO_HTML(componentName, demoHTMLMatch[1], true) : '';

    fs.writeFileSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_DEMOS_DIR_PATH, `${componentName}${DEMO_SUFFIX}`), demoHTML, 'utf8');
    fs.writeFileSyncWithLogs(path.join(DOCS_DIR_PATH, DOCS_DEMOS_DIR_PATH, `${componentName}${FULLSCREEN_DEMO_SUFFIX}`), fullScreenDemoHTML, 'utf8');
  });
};

const GET_FULL_SCREEN_BTN_HTML = (componentName) => `
  <div style="padding-bottom: 16px">
    <a href="/${path.join(DOCS_DEMOS_DIR_PATH, `${componentName}${FULLSCREEN_DEMO_SUFFIX}`)}" target="_blank" style="float: right;">OPEN IN NEW WINDOW</a>
    <div style="clear: right"></div>
  </div>
`;

const GET_DEMO_HTML = (componentName, componentHTML, isFullScreen = false) => `
  <link rel="stylesheet" href="/${path.join(DOCS_STYLES_DIR_PATH, COPIED_CSS_NAME)}"></head>
  ${isFullScreen ? '' : GET_FULL_SCREEN_BTN_HTML(componentName)}
  ${componentHTML}
  <script type="text/javascript" src="/${path.join(DOCS_JS_DIR_PATH, JS_BUNDLE_NAME)}"></script>
`;

fs.copyFileSyncWithLogs = (srcFileName, destFileName, format = 'binary') => {
  const srcFileContents = fs.readFileSync(srcFileName, format);
  fs.writeFileSync(destFileName, srcFileContents, format);
  console.log(`${srcFileName} -> ${destFileName} [copied]`);
};

fs.ensureDirSyncWithLogs = (dirName) => {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log(`${dirName} [created]`);
  }
};

fs.isDirSync = (dirName) => {
  return fs.lstatSync(dirName).isDirectory();
};

fs.writeFileSyncWithLogs = (fileName, fileContents, encoding) => {
  fs.writeFileSync(fileName, fileContents, encoding);
  console.log(`${fileName} [created]`);
};

fs.readdirRecursiveSync = (dirName) => {
  let fileNames = [];

  fs.readdirSync(dirName).forEach(fileName => {
    if (fs.isDirSync(path.join(dirName, fileName))) {
      const subFiles = fs.readdirRecursiveSync(path.join(dirName, fileName))
        .map(subFileName => path.join(fileName, subFileName));
      fileNames = fileNames.concat(subFiles);
    } else {
      fileNames.push(fileName);
    }
  });

  return fileNames;
};
