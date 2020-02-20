const { app } = require('./app.js');
const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));