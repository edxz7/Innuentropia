const router = require("express").Router();

const {
  // createEventGet,
  projectGet,
  createProjectPost,
  deleteProject,
  editProjectGet,
  editProjectPost,
  projectDetailsGet
} = require('../controllers/project.controllers');

// router.get("/event/create", createEventGet)
router.post("/project/create", createProjectPost);
router.post("/project/:id",    projectGet);
router.get("/project/:id/delete", deleteProject);
router.get('/project/:id/edit', editProjectGet);
router.post('/project/:id/edit', editProjectPost);
router.get('/project/:id', projectDetailsGet);
  
module.exports = router