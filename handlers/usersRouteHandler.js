// Dependencies




// Module Wrapper
const handler = {};

handler.usersRouteHandler = (requestProperty, callback) => {

    const acceptableMethod = ['get', 'post', 'put', 'delete'];

    if (acceptableMethod.includes(requestProperty.method)) {

        handler._users[requestProperty.method](requestProperty, callback)
    }
    else {
        callback(402, {
            err: "There is a problem in your request!!"
        })
    }

}


handler._users = {};



// Get method
handler._users.get = (requestProperty, callback) => {
    console.log("get");
}



// Post method 
handler._users.post = (requestProperty, callback) => {
    console.log("post");
}



// Put method 
handler._users.put = (requestProperty, callback) => {
    console.log("put");
}


// Delete method 
handler._users.delete = (requestProperty, callback) => {
    console.log("delete");
}




// Exports
module.exports = handler;