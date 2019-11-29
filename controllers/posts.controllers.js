const Post = require("../models/Post");

// exports.createPostGet = (req, res, next) => {
//     res.render('createPost');
// }

exports.createPostPost = async (req, res, next) => {
    const { _id } = req.user;
    const { title, description } = req.body;
    if(req.file){
      const { secure_url, originalname } = req.file;
      await Post.create({
        title,
        description,
        author: _id,
        imgPath: secure_url,
        imgName: originalname
      });
    }
    res.redirect('/feed');
}

exports.postGet = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("author");
  res.render("postPages/postDetailsPage", { post });
}

exports.deletePost = (req, res) => {
  const {id} = req.params
  Post.findByIdAndDelete(id)
      .then(() =>{ 
        res.redirect("/profile")
      })
      .catch(err => console.log(err))
};

exports.editPostGet = (req, res) => {
  const { id } = req.params;
  Project.findById(id)
    .then((post) => {
      console.log(post)
      res.render('postPages/editPost', { post });
    })
    .catch((err) => console.log(err));
};

exports.editPostPost =  (req, res) => {
  const { id } = req.params;
  Project.findByIdAndUpdate(id, {	$set: {...req.body}}, { new: true })
    .then((post) => res.redirect(`/project/${post._id}/edit`))
    .catch((err) => console.log(err));
};
  
exports.postDetailsGet =  async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("author");
  res.render("postPages/postDetailsPage", { post });
}
