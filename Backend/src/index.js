import app from './app.js';
import { conectionBD } from './db.js';
const port = 10101;

conectionBD ();

app.listen(port,()=>{
    console.log("Server : true ", port);
})