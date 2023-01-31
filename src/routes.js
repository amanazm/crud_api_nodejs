const express = require('express');

const commonRoutes = require('./controller/commonRoutes');

const router = express.Router();

router.use('/aman',commonRoutes);


module.exports = router