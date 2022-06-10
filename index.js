// Dependencies
const http = require('http');
const { requestResponseHandle } = require('./helpers/requestResponseHandle')



// Module Wrapper
const app = {};



// Configuration
app.config = {
    port: 3000,
}



// Server create
app.createServer = () => {

    const server = http.createServer(app.requestResponseHandle);

    // Server listening
    server.listen(app.config.port, () => {
        console.log("Server has been running on port", + app.config.port)
    })
}



app.requestResponseHandle = requestResponseHandle;



// Server initialize
app.createServer();