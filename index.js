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

    // Fetching first 10 img-contents from img URL
    for (let i = 0; i < 10; i++) {
      fetch(imgUrlArr[i])
        .then((res) => res.text())
        .then((imgContent) => console.log(imgContent));
    }
  });
