const express = require('express');
const app = express();
const listRouter = require('./routes/list.router.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/shoppingList', listRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
