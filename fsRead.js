const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) {
    console.log("다시 작성");
  }
})
