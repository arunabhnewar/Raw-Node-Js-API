// Dependencies
// const { request } = require('http');
const url = require('url');
const routes = require('../routes/routes');
const { notFoundHandler } = require('../handlers/notFoundHandler');



// Module Wrapper
const handler = {};



// Request and response handler
handler.requestResponseHandle = (req, res) => {

    const method = req.method.toLowerCase();
    const headerObj = req.headers;
    const requestUrl = url.parse(req.url, true);
    const path = requestUrl.pathname;
    const formatPath = path.replace(/^\/+|\/+$/g, '')
    const queryObj = requestUrl.query;

    const acceptedContent = ['application/json', 'text/plain'];
    let body = '';

    const requestProperty = {
        method,
        headerObj,
        requestUrl,
        path,
        formatPath,
        queryObj,
        body
    }

    if (acceptedContent.includes(headerObj["content-type"])) {

        const rawDataArray = [];
        req.on('data', (buffer) => {
            rawDataArray.push(buffer)
        })

        req.on('end', () => {
            body += Buffer.concat(rawDataArray).toString();

            const choosenHandler = routes[formatPath] ? routes[formatPath] : notFoundHandler;

            choosenHandler(requestProperty, (statusCode, body) => {
                res.writeHead(statusCode);
                res.end(body);
            })
        })

    }
    else {
        res.end("Content type is not acceptable");
    }


}


// Exports
module.exports = handler;