fs = require("fs");
// fs.writeFile(filename, data, [encoding], [callback])
var api =
  '{ "data" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

fs.writeFile("data.json", api, function (err) {
  if (err) return console.log(err);

  console.log("Write API data > data.json");
});
