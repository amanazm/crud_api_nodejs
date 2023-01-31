const express = require('express');

const router = express.Router();

const {
    addClientAgency,
    updateClient,
    getdetails
  } = require('./commonController');


router.post('/create_client_agency', addClientAgency);
router.put('/update_client', updateClient);
router.get('/details', getdetails);

module.exports = router