const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");
const { 
  completeProfileGet,
  completeProfilePost,
  profileGet, 
  profilePost 
} = require("../controllers/auth.controllers");

router.get("/profile", completeProfileGet);
router.post("/profile", completeProfilePost);
router.get("/profile/:id", profileGet);
router.post("/profile/:id", uploadCloud.single("photoURL"), profilePost);


module.exports = router;