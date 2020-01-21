const fs = require("fs");

let oddiseyCharacters = 0;

function showCharacters() {
  console.log("readOddisey: ", oddiseyCharacters);
}

fs.readFile("other/odissey.txt", "utf8", function(err, data) {
  oddiseyCharacters = data.length;
  showCharacters();
});

showCharacters();
