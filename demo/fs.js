// File System

const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname, 'test'), (err) => {
  if(err) {
    throw err;
  }

  console.log('Folder was created')
})*/

const filePath = path.join(__dirname, 'test', 'test.txt');
/*fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
    if (err) {
      throw err;
    }

    console.log('File was created')
  }
)

fs.appendFile(filePath, 'Hello NodeJS! My awesome file', (err) => {
    if (err) {
      throw err;
    }

    console.log('File was created')
  }
)*/

/*fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }

  const data = Buffer.from(content)

  console.log('Content', data.toString())
})*/

//or
fs.readFile(filePath, 'utf8',(err, content) => {
  if (err) {
    throw err;
  }

  console.log('Content', content)
})
