// Dependencies





// Module Wrapper
const handler = {};



handler.aboutRouteHandler = (requestProperty, callback) => {

    console.log(requestProperty);
    console.log("This is a about route");
    callback(200, "This is a about page")
}




// Exports
module.exports = handler;