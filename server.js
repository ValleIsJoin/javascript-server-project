const http = require('http')
const port = 3000

const server = http.createServer(function(req, res) {
    res.write('Hello Node')
    res.end()

})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})