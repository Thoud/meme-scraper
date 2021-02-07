# Meme Scraper

> Simple meme scraper to request the first 10 memes from [https://memegen-link-examples-upleveled.netlify.app/](https://memegen-link-examples-upleveled.netlify.app/) and store them in a local folder.

## Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [cheerio](https://www.npmjs.com/package/cheerio)

## Usage

```terminal
node index.js
```

When the program is run the first 10 memes from the website will be stored in a folder called "meme_folder" which will be in the same directory as the project directory.

After the download is complete a success message will be printed out to the console.
