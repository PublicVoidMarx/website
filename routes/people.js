const express = require('express')
const router = express.Router()
const {getPeople,createPeople,deletePeople} = require('../controllers/people')

//      FORMA 1
/*
router.get('/',getPeople)
router.post('/',createPeople)
router.delete('/:id',deletePeople)
*/
//      FORMA 2
router.route('/').get(getPeople).post(createPeople)
router.route('/:id').delete(deletePeople)

module.exports = router
