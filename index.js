const fetch = require('node-fetch');

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => console.log(body));

// Todo: naming the folder "meme_folder"
