// Dependencies
const fetch = require('node-fetch');
const $ = require('cheerio');
const fs = require('fs');

// Creating a new folder for saving the loaded images
try {
  if (!fs.existsSync('./meme_folder')) {
    fs.mkdirSync('./meme_folder');
  }
} catch (err) {
  console.error(err);
}

// Fetching HTML from URL and saving the img URLs into the array
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => {
    const imgUrlArr = [];

    for (let i = 0; i < 143; i++) {
      imgUrlArr.push($('img', body)[i].attribs.src);
    }

    // Fetching first 10 img-contents from img URL and saving them
    for (let i = 0; i < 10; i++) {
      fetch(imgUrlArr[i]).then((res) => {
        const path =
          './meme_folder/' +
          imgUrlArr[i].split('?')[0].split('/').slice(4).join('_');

        const dest = fs.createWriteStream(path);
        res.body.pipe(dest);
      });
    }
  });
