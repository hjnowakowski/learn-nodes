const fs = require('fs');


fs.readdir("./img/", function (err, files) {
  files.forEach(function (file) {
      fs.unlink(file, function (err){
        if(err) console.log(err);
        console.log("File deleted"+files);
      });
  });
});
