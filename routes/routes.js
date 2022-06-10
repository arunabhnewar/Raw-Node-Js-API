// Dependencies
const { homeRouteHandler } = require('../handlers/homeRouteHandler');
const { aboutRouteHandler } = require('../handlers/aboutRouteHandler');



// Route Object wrapper
const routes = {

    "home": homeRouteHandler,
    "about": aboutRouteHandler,
}


// Exports
module.exports = routes;