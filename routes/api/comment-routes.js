const router = require("express").Router();

const {
    addComment,
    removeComment,
} = require("../../controllers/comment-controller");

//Set up GET all and POST at /api/comments
router.route("/:pizzaId").post(addComment);

//set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
