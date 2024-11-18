const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    res.write('<h1>Hello</h1>')
    res.end()
})

const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
