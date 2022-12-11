const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')
const { getPlane, createPlane, getPlaneById } = require('../controllers/planesController')

// Путь где хранить файлы с помощью multer
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.get('/', getPlane)
router.get('/:id', getPlaneById)
router.post('/', upload.single('planeImage'), createPlane, (req, res) => res.send('Create plane'))

module.exports = router;