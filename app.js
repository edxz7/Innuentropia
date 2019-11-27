require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const passport = require("./config/passport");
const session = require("express-session");
const { checkUser, isAuth } = require("./middlewares/index.middlewares");

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => console.log("Connected to AtlasDB!"))
  .catch(err => console.error("Error connecting to mongo", err));

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Session Setup
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Express View Engine Setup
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';

const index = require("./routes/index");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const eventRoutes = require("./routes/event.routes")
// const dogooderRouetes = require("./routes/dogooderRoutes");
app.use("/", checkUser, index);
app.use("/", authRoutes);
app.use("/", isAuth, profileRoutes);
app.use("/", isAuth, eventRoutes)

// app.use("/do-gooder", isAuth, dogooderRouetes);

module.exports = app;
