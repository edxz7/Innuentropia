const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");

const {
  // createPostGet,
  postGet,
  deletePost,
  editPostGet,
  editPostPost,
  postDetailsGet,
  createPostPost 
} = require('../controllers/posts.controllers')


// router.get('/post', createPostGet);
router.post('/post/create', uploadCloud.single("photo"), createPostPost);
// router.post("/post/:id",    postGet);
// router.get("/post/:id/delete", deletePost);
// router.get('/post/:id/edit', editPostGet);
// router.post('/post/:id/edit', editPostPost);
// router.get('/post/:id', postDetailsGet);

module.exports= router;