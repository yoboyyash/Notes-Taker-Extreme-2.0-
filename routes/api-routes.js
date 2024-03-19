//Creating essential consts
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

//Router get 
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});

//Router post 
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title, 
        text: req.body.text, 
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

//Router delete,
//Didn't get to figure out / finish the delete bonus for this HW because I am behind, will come back to this

//Exports router 
module.exports = router; 
