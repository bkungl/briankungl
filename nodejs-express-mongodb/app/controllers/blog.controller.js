const db = require("../models");
const Blog = db.blogs;


//TEST FUNCTION
//Create and Save a new Blog
/*blogID: Number,
            blogTitle: String,
            isStarred: Boolean,
            isHidden: Boolean*/
exports.create = (req, res) => {
    // Validate request
    if (!req.body.blogTitle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Blog
    const blog = new Blog({
        title: req.body.blogTitle,
        isStarred: req.body.isStarred,
        //isHidden: req.body.published ? req.body.published : false
        isHidden: req.body.isHidden
    });

    // Save Blog in the database
    blog
        .save(blog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Blog."
            });
        });
};

// Create and Save a new Tutorial
/*exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
*/

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    //req.query.title used as condition for findAll method
    //const title = req.query.title;
    //var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    //Tutorial.find(condition)
    Blog.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.blogID;

    Tutorial.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Blog with id " + id
                });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: "Error retrieving Blog with id=" + id
                });
        });
};

// Update a Tutorial by the id in the request
/*
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
*/
// Delete a Tutorial with the specified id in the request
/*exports.delete = (req, res) => {
  
};
*/
// Delete all Tutorials from the database.
/*exports.deleteAll = (req, res) => {
  
};
*/

// Find all starred Blogs
//TODO need to check for more than 1 and if so throw error or self corrects
exports.findAllPublished = (req, res) => {
    Blog.find({
            isStarred: true
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving starred blog."
            });
        });
};
