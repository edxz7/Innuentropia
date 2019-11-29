const Project = require("../models/Project")

exports.createProjectPost = async (req, res) => {
    console.log(req.body)
    const { _id } = req.user;
    await Project.create({ ...req.body, author: _id });
    res.redirect(`/profile/${req.user._id}`);
};

exports.projectGet = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate("author");
  res.render("projectPages/projectDetailsPage", { project });
}

exports.deleteProject = (req, res) => {
  const {id} = req.params
  Project.findByIdAndDelete(id)
      .then(() =>{ 
        res.redirect(`/profile/${req.user._id}`)
      })
      .catch(err => console.log(err))
};

exports.editProjectGet = (req, res) => {
  const { id } = req.params;
  Project.findById(id)
    .then((project) => {
      console.log(project)
      res.render('projectPages/editProject', { project });
    })
    .catch((err) => console.log(err));
};

exports.editProjectPost =  (req, res) => {
  const { id } = req.params;
  Project.findByIdAndUpdate(id, {	$set: {...req.body}}, { new: true })
    .then((project) => res.redirect(`/project/${project._id}/edit`))
    .catch((err) => console.log(err));
};
  
exports.projectDetailsGet =  async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate("author");
  res.render("projectPages/projectDetailsPage", { project });
}
