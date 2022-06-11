// Dependencies
// const { request } = require('http');
const url = require('url');
const routes = require('../routes/routes');
const { notFoundHandler } = require('../handlers/notFoundHandler');
const data = require('./library/data');



// Module Wrapper
const handler = {};


// const content = {
//     firstName: "Jamboo",
//     lastName: "Papa",
//     phone: "9876543210",
//     password: "11062022",
//     age: "3 Years",
// }

// data.create("check", 'test', JSON.stringify(content), (err) => {
//     if (!err) {
//         console.log("File successfuly added");
//     } else {
//         console.log(err);
//     }
// })


// data.read("check", 'test', (err, content) => {
//     if (!err && content) {
//         console.log(content);
//     } else {
//         console.log(err.message);
//     }
// })


// data.update("check", 'test', JSON.stringify(content), (err) => {
//     if (!err) {
//         console.log("file upadated");
//     } else {
//         console.log(err.message);
//     }
// })


// data.delete("check", 'test', (err) => {
//     if (!err) {
//         console.log("File deleted successfuly");
//     } else {
//         console.log(err.message);
//     }
// })



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

            choosenHandler(requestProperty, (statusCode, payload) => {

                // Validation check
                statusCode = typeof (statusCode) === "number" ? statusCode : 500;
                payload = typeof (payload) === "object" ? payload : {};

                res.writeHead(statusCode, { "content-type": "application/json" });
                res.end(JSON.stringify(payload));
            })
        })

    }
    else {
        res.end("Content type is not acceptable");
    }


}


// Exports
module.exports = handler;