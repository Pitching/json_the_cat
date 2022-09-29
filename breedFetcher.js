const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else if (Boolean(!response.length)) {
    return console.log('Cat breed not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
});