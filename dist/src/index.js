import express from 'express';
const app = express();
//  send request to / backend server
app.get('/', (req, res) => {
    res.send(`server on running on this port 5000`);
});
// export app 
export default app;
