const http = require('http');
const url = require('url');

function handler(req, res)
{
    // console.log(req.url);
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl);
    res.setHeader('x-server-date', new Date() );


    if(parseUrl.pathname === '/')
    {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('Hello, this is a web server!');
        return res.end();
    }
    else if(parseUrl.pathname === '/time')
    {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write( new Date().toString() );
        return res.end();
    }
    else if(parseUrl.pathname === '/hello')
    {
        const name = parseUrl.query.name;

        if(!name)
        {
            res.writeHead(404, {'Content-type': 'text/plain'});
            return res.end();
        }


        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(`Hello ${name}!`);
        console.log(name);
        return res.end();
    }
    else if(parseUrl.pathname.startsWith('/user'))
    {
        const regex = new RegExp('\/user\/(.+)');
        const matches = regex.exec(parseUrl.pathname);

        console.log('Got into users if');

        if(!matches || !matches[1])
        {
            console.log('No matches');
            res.writeHead(404, {'Content-type': 'text/plain'});
            return res.end();
        }

        console.log('Got a user!');
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(`User profile of  ${matches[1]}!`);
        return res.end();



    }
    else
    {
        res.writeHead(404, {'Content-type': 'text/plain'});
        return res.end();
    }



}

const server = http.createServer(handler);



server.listen(3000);
