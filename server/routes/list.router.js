const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
const sqlText = `SELECT * FROM "shoppingList";`;
pool.query(sqlText)
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res)=> {
    const item = req.body;
    const sqlText = `INSERT INTO shoppingList (name, quantity, unit, purchased)
    VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [item.name, item.quantity, item.unit, item.purchased])
    .then((result) => {
        console.log(`Added item to the database`, item);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
});

module.exports = router;