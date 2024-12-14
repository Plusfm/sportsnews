const express =require('express')
const router= express.Router()
const contactController = require('../Controller/contactController')

router.post('/contact',contactController.contactpost )
// router.get('/contact' , contactController.contacttget)
// router.get('/contact/:id', contactController.contactgetid)
// router.delete('/content/:id', contactController.contactdelete)



module.exports = router;