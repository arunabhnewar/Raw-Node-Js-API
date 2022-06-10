// Dependencies




// Module Wrapper
const handler = {};

handler.notFoundHandler = (requestProperty, callback) => {

    console.log("This is a not found route");
    callback(404, "Your route is not found")
}



// Exports
module.exports = handler;