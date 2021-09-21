const tsvToJson = (csv) => {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split("\t");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentLine = lines[i].split("\t");
    for (var j = 0; j < headers.length; j++) {
      const k = headers[j].replace("\r", "").trim().toLowerCase();
      const v = currentLine[j].trim();
      obj[k] = v;
    }
    result.push(obj);
  }
  return result;
};

const fs = require("fs");

const content = fs.readFileSync("./data.tsv", "utf8");

const json = tsvToJson(content);

json.forEach(d => {
  const name = d.name.match(/\(.+\)/)[0].replace(/[\(\)]/g, '')
  d.commonName = d.name.replace(/\(.+\)/g, '')
  d.name = name
})

const out = JSON.stringify(json, null, 2);

console.log(out);
