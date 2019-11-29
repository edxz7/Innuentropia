const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");
const { 
  profileGet, 
  profilePost 
} = require("../controllers/auth.controllers");


router.get("/profile", profileGet);
router.post("/profile", uploadCloud.single("photoURL"), profilePost);


module.exports = router;