const tables = require("../../database/tables");
// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { browse, read };
