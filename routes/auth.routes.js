const router = require("express").Router();
const passport = require("../config/passport");
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  logOut
} = require("../controllers/auth.controllers");
const { isAuth } = require("../middlewares/index.middlewares");

// Local Signup & Login
router.get("/signup", isAuth, signupGet);
router.post("/signup", signupPost);
router.get("/login", isAuth, loginGet);
router.post("/login", loginPost);

// Facebook Login
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// Facebook Login callback, after giving permissions
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/"
  })
);

// Google Login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Login callback, after giving permissions
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/"
  })
);

// Logout no matter which user
router.get("/logout", logOut);

module.exports = router;