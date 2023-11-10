const TodoModel = require("../model/schema");

const getToDo = async (req, res, next) => {
  const todo = await TodoModel.find();
  res.status(200).send(todo);
};

const saveToDo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text }).then((data) => {
    console.log("added successfully");
    console.log(data);
    res.send(data);
  });
};

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated successfully"))
    .catch((err) => console.log(err.message));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err.message));
};

module.exports = {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
};
