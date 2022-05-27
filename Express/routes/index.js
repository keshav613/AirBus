module.exports = (app) => {
  const items = require("../controllers");

  var router = require("express").Router();

  // Create a new item
  router.post("/", items.create);

  // Retrieve all item
  router.get("/", items.findAll);

  // Retrieve single item with id
  router.get("/:id", items.findOne);

  // Update a item with id
  router.put("/:id", items.update);

  // Delete a item with id
  router.delete("/:id", items.delete);

  app.use("/api/v1/items/", router);
};
