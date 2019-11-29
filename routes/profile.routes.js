const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");
const { 
  profileGet, 
  profilePost,
  profileEditGet,
  profileEditPost
} = require("../controllers/auth.controllers");


router.get("/profile/:id", profileGet);
router.post("/profile/:id", uploadCloud.single("photoURL"), profilePost);
// router.get("/profile/:id", profileGet);
router.get("/profile/:id/edit", profileEditGet);
router.get("/profile/:id/edit", profileEditPost);


module.exports = router;