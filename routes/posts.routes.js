const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");

const {createPostGet,createPostPost } = require('../controllers/posts.controllers')

router.get('/post', createPostGet);

router.post('/post/create', uploadCloud.single("photo"), createPostPost);

module.exports= router;