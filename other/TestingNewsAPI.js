

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-05-21&' +
          'sortBy=popularity&' +
          'apiKey=xxxxxxxx';

var response = await fetch(url);
var data = await response.json();
console.log(data);