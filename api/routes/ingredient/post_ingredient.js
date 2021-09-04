const express = require("express");
const router = express.Router();
const models = require('../../models/models');
const { Ingredient } = models; 

router.post('/ingredients', async (req, res, next) => {
    const { name } = req.body;
    try {
        const posted = await Ingredient.create({ name });
        return res.json(posted);
    } catch (error) {
        next(error);
    }
});



module.exports = router;