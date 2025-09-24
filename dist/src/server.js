import app from "./index.ts";
const port = 5000;
// server
// iffe
(() => {
    app.listen(port, () => {
        console.log(`server running on this port ${port}`);
    });
})();
// process 
