// Dependencies
const fetch = require('node-fetch');
const $ = require('cheerio');

// Global variables
const imgUrlArray = [];

// Fetching HTML from URL
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => console.log(body));

// Todo: naming the folder "meme_folder"
