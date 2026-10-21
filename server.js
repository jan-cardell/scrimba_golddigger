import http from 'node:http'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    res.end(() => console.log('hello from server'))
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))