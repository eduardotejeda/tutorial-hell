const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render = async (filename) => {
const filePath = path.join(process.cwd(), filename);

const dom = awaitSDOM.formFile(filePath, { 
    runScripts: "dangerously",
    resources: "usable"
});

return dom;
};

module.exports = render;