const router = require('express').Router();
const Cotizador = require('../../models/cotizador.model');

router.get('/', async(req, res)=>{
    try {
        const cotizador = await Cotizador.find();
        res.json(cotizador);     
    } catch (error) {
        res.json({error: error.message})
    }
   
   //res.json('ok');
});

router.get('/:ObjectId',async (req,res)=>{
    const { ObjectId } = req.params;
       

    const cot = await Cotizador.findById(ObjectId)
    res.json(cot);
});


module.exports = router;