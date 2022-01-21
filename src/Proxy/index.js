/* 
- Intent: "Provide a surrogate or placeholder for another object to control access to it."
- Can be used to manage a remote resource, provide data validation of input, provide security, cache data, and log actions.
*/

var fs = require("fs");
var path = require("path");

var FS_Proxy = require("./FS_Proxy");

var fs = new FS_Proxy(require("fs"));

var txtFile = path.join(__dirname, "Readme.txt");
var mdFile = path.join(__dirname, "Readme.md");

var result = (error, contents) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("reading file...");
  console.log(contents);
};

fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);
