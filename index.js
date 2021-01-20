// Dependencies
const fetch = require('node-fetch');
const $ = require('cheerio');

// Global variables
const imgUrlArr = [];

// Fetching HTML from URL
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => {
    for (let i = 0; i < 143; i++) {
      imgUrlArr.push($('img', body)[i].attribs.src);
    }
  });

// Todo: naming the folder "meme_folder"
// * 143 images
