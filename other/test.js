var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-05-21&' +
          'sortBy=popularity&' +
          'apiKey=xxxxxxxx';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })