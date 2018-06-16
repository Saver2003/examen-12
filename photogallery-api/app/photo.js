const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const auth = require('../middleware/auth');
const Photo = require('../models/Photo');

const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    Photo.find()
      .then(photo => res.send(photo))
      .catch(() => res.sendStatus(500))
  });

  router.post('/', auth, upload.single('photo'),  (req, res) => {
    const photoData = req.body;

    if (req.file) {
      photoData.photo = req.file.filename;
    } else {
      photoData.photo = null;
    }

    const photo = new Photo(req.body);

    photo.save()
      .then(photo => res.send(photo))
      .catch(error => res.status(400).send(error));
  });

  router.delete('/:id', auth, async (req, res) => {
    const photo = await Photo.findOne({_id: req.params.id});

    if (photo.user.toString() !== req.user._id) return res.status(403).send({error: 'delete impossible'});

    photo.remove()
      .then(() => res.send('Photo was deleted'))
      .catch(error => res.status(400).send(error));
  });

  return router;

};

module.exports = createRouter;