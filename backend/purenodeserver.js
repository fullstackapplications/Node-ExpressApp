const http = require('http');
const url = require('url');

function handler(req, res)
{
    // console.log(req.url);
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl);

    if(parseUrl.pathname === '/')
    {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('Hello, this is a web server!');
        res.end();
    }
    else
    {
        res.writeHead(494, {'Content-type': 'text/plain'});
        res.end();
    }



}

const server = http.createServer(handler);



server.listen(3000);
