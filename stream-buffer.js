const http = require('http');
const fs = require('fs');

//Create a server.
const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/readText' && req.method === 'GET'){
        const readFromFile = fs.createReadStream(process.cwd() + '/texts/written.txt');
          
        readFromFile.on('data', (buffer) => {
             res.statusCode = 200;
             res.write(buffer);
        })

        readFromFile.on('end', () => {
            res.statusCode = 200;
            res.end('Your data loaded successfully.');
        });

        readFromFile.on('error', (error) => {
            res.end(`Something went wrong. ERROR:${error.message}`);
        });

    }
    else {
        // Handle other requests with a 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
 });

server.listen(4500, () => {
    console.log('server listening on 4500');
} )