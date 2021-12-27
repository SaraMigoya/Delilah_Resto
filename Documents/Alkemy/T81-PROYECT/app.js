const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fileUpload = require('express-fileupload')
const config = require("./config/config").development;
const log = require("./utils/logger");

const cors = require("cors");

require("dotenv").config();


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const testimonialRouter = require("./routes/testimonials");
const roleRouter = require("./routes/role");
const categoryRouter = require("./routes/categories");
const organizationRouter = require("./routes/organization");
const membersRouter = require("./routes/members")
const newsRouter = require("./routes/news");
const activitiesRouter = require("./routes/activities");
const uploadRouter = require('./routes/upload')
const slidesRouter = require('./routes/slides');
const contactRouter = require('./routes/contact')
const commentRouter = require('./routes/comments');

// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');


const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir: '/tmp/',
  debug:true
}))

// middlewares
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/testimonials", testimonialRouter);
app.use("/role", roleRouter);
app.use("/categories", categoryRouter);
app.use("/organization", organizationRouter);
app.use("/members", membersRouter)
app.use("/news", newsRouter);
app.use("/activities", activitiesRouter);
app.use("/upload", uploadRouter);
app.use(config.swaggerPath, swaggerUI.serve, swaggerUI.setup(require("./swagger/swagger.json")))
app.use("/slides", slidesRouter);
app.use("/contacts", contactRouter)
app.use("/comments",commentRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const code = err.code || 500;

  log.error(
    `${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
  log.error(err.stack);

  const body = {
    error: {
      code,
      message: "There was an error, please try again later",
      detail: err.data,
    },
  };
  res.status(code).json(body);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
