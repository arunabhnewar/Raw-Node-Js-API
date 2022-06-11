// Dependencies
const path = require('path');
const fs = require('fs');


// Module Wrapper
const data = {};

data.basedir = path.join(__dirname, '../../.data/')

data.create = (dir, file, content, cback) => {

    fs.open(path.join(data.basedir, dir, file + '.json'), "wx", (err, fileDescriptor) => {

        if (!err && fileDescriptor) {

            fs.writeFile(fileDescriptor, content, (err) => {

                if (!err) {

                    fs.close(fileDescriptor, (err) => {

                        if (!err) {

                            cback(null);
                        }
                        else {
                            cback(err);
                        }
                    })
                }
                else {
                    cback(err);
                }
            })

        }
        else {
            cback(err);
        }
    })
}



data.read = (dir, file, cback) => {

    fs.open(path.join(data.basedir, dir, file + '.json'), "r", (err, fileDescriptor) => {

        if (!err && fileDescriptor) {

            fs.readFile(fileDescriptor, 'utf-8', (err, fileInformation) => {

                if (!err && fileInformation) {

                    fs.close(fileDescriptor, (err) => {

                        if (!err) {

                            cback(err, fileInformation)
                        }
                        else {
                            cback(err);
                        }
                    })
                }
                else {
                    cback(err);
                }
            })

        }
        else {
            cback(err);
        }
    })
}



data.update = (dir, file, content, cback) => {

    fs.open(path.join(data.basedir, dir, file + '.json'), "r+", (err, fileDescriptor) => {

        if (!err && fileDescriptor) {

            fs.ftruncate(fileDescriptor, (err) => {

                if (!err) {

                    fs.writeFile(fileDescriptor, content, (err) => {

                        if (!err) {

                            fs.close(fileDescriptor, (err) => {

                                if (!err) {

                                    cback(null);
                                }
                                else {
                                    cback(err);
                                }
                            })
                        }
                        else {
                            cback(err);
                        }
                    })
                }
                else {
                    cback(err);
                }

            })
        }
        else {
            cback(err);
        }

    })
}



data.delete = (dir, file, cback) => {

    fs.unlink(path.join(data.basedir, dir, file + ".json"), (err) => {

        if (!err) {

            cback(null);
        }
        else {
            cback(err);
        }
    })
}


// Exports
module.exports = data;