/*
* Author : Madhu Korada
*/

import { createServer } from 'http';
import  app  from './app';
import { sequelize } from './sequelize';

const port = process.env.PORT || 3000;

/*
** Immediately Invoked Function Expression (IIFE) which means it gets executed immediately. Think of it as a function getting called automatically when the interpreter reaches that function.
**/

(async () => {

    // Database Connection 
    sequelize.authenticate()
        .then(function () {
            console.log("DB connection Successful")
        })
        .catch(function (err) {
            console.log("Failed to connect to DB",err)
        })

    // Node Server Initiation
    createServer(app)
        .listen(
            port,
            () => console.info(`Server running on port ${port}`)
        );
})();
