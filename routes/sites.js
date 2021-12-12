import express from 'express'

const router = express.Router()

router.get('/', getSites)
router.get('/:id', getSite)
router.post('/', createSite)
router.patch('/:id', updateSite)
router.delete('/:id', deleteSite)

export default router
