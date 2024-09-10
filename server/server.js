require('dotenv').config()

const http = require('http')

const app = require('./app');
const { openConnection } = require('./services/mongo/mongo-connection')
const { error, log } = require('console');

const { HOST, PORT } = process.env;

openConnection(process.env.MONGO_DB_URL).then(_ => {
    app.listen(PORT || 5780, HOST || "127.0.0.1", () => {
        console.log(`http://${HOST}:${PORT}`)//איפה השרת נמצא127.0.0.1:5780 משפט זה אומר 
    })
    //listen-פונקציה זאת תעלה את השרת לכתובת הנ"ל
    const server = http.createServer(app)
}).catch(error => {
    console.log(error);
    console.log('cannot connect to mongo server');
})
