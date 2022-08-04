const request = require('request');
const input = process.argv.slice(2);
const breedFetchApi = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;


const fetchBreedDescription = function(breedName, callback) {
  
  request(breedFetchApi, (error, response, body) => {
  
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not valid!');
      return;
      }
    if (!breedFetchApi) {
      console.log(error);
    }
    console.log(data[0].description);
    });
};

module.exports = { fetchBreedDescription };