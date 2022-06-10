// Dependencies




// Module Wrapper
const handler = {};

handler.homeRouteHandler = (requestProperty, callback) => {

    console.log(requestProperty);
    console.log("This is a home route");
    callback(200, "This is a home page")
}



// Exports
module.exports = handler;