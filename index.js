const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send(`Hostname: ${hostname}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
