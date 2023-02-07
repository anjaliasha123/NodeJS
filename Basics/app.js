//creating server using node
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === '/'){
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button>Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk)
        }); //listen to certain data events
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const msg = parseBody.split('=')[1];
            fs.writeFileSync('message.txt',msg)
        })
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();

    }
    console.log(req.url, req.method);
    res.write('<h1>Hello from node js</h1>')
    res.end();
    // process.exit();//hard exit
});

server.listen(3000,()=>{
    console.log('Listening to server')
});