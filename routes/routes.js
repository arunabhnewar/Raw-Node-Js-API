// Dependencies
const { homeRouteHandler } = require('../handlers/homeRouteHandler');
const { aboutRouteHandler } = require('../handlers/aboutRouteHandler');
const { usersRouteHandler } = require('../handlers/usersRouteHandler');


// Route Object wrapper
const routes = {

    "home": homeRouteHandler,
    "about": aboutRouteHandler,
    "users": usersRouteHandler,
}


// Exports
module.exports = routes;