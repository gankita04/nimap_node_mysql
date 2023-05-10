const express = require('express');
const router = express.Router();

const catC = require('../controllers/catController')

router
    .get('/show-cat', catC.showCategory)
    .get('/show-cat/:id', catC.selectCategoryById)
    .post('/add-cat', catC.insertCategory)
    .put('/update-cat/:id', catC.updateCategory)
    .delete('/delete-cat/:id', catC.deleteCategory);

module.exports = router;