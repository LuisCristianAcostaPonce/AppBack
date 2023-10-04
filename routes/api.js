const router = require('express').Router();


router.use('/cotizador', require('./api/cotizador'));



module.exports = router;