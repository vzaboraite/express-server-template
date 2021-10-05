const express = require("express");

const router = express.Router();

// const dummyData = [
//   {
//     id: 1,
//     text: "Lorem",
//   },
//   {
//     id: 2,
//     text: "Ipsum",
//   },
//   {
//     id: 3,
//     text: "Dolor",
//   },
// ];

/* Route to get all instances from db */
router.get("/", (req, res) => {
  // Pass in database/endpoint name
  res.json(response);
});

/* Route to get single instance by id from db */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundInstance = arr.find((instance) => instance.id === parseInt(id));

  res.json(foundInstance);
});

/* Route to get filtered list of instances from db */
router.get("/route/:parameter", (req, res) => {
  const { parameter } = req.params;

  //   NOTE: if there is bigger code block, don't forget return statement!!!
  const filteredInstances = arr.filter(
    (instance) => instance.parameter === parameter
  );

  res.json(filteredInstances);
});

/* Route to create an instance */
router.post("/", (req, res) => {
  const response = {
    ...req.body,
  };

  // Add created instance to db
  arr.push(response);

  res.json(response);
});

/* Export router */
module.exports = router;
