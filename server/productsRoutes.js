const router = require("express").Router();

router.get("/getproducts", function (req, res) {
  res.send(products);
});

router.get("/getproduct/:id", function (req, res) {
  let id = req.params.id;
  let product = products.find((ob) => ob.id == id);
  res.send(product);
});

module.exports = router;

//===========================================================================================================================================================================================================================================================>
//=====JSON=====>
var products = [
  {
    id: 10,
    productName: "tomatos",
    color: "red",
    active: true,
    section: "vegtables",
    price: 8.0,
  },
  {
    id: 11,
    productName: "shampoo",
    color: "white",
    active: false,
    section: "clean",
    price: 10.99,
  },
  {
    id: 12,
    productName: "basic product",
    color: "red",
    active: true,
    section: "vegtables",
    price: 8.0,
  },
  {
    id: 13,
    productName: "onions",
    color: "white",
    active: false,
    section: "vegtables",
    price: 6.9,
  },
  {
    id: 14,
    productName: "ground beef",
    color: "red",
    active: true,
    section: "meat",
    price: 54.0,
  },
  {
    id: 15,
    productName: "blue cheese",
    color: "blue",
    active: false,
    section: "deri",
    price: 12.5,
  },
  {
    id: 16,
    productName: "diet pepsi",
    color: "blue",
    active: false,
    section: "drinks",
    price: 6.99,
  },
  {
    id: 17,
    productName: "24 water pack",
    color: "",
    active: false,
    section: "drinks",
    price: 7.0,
  },
  {
    id: 18,
    productName: "hand soap",
    color: "pink",
    active: false,
    section: "clean",
    price: 4.99,
  },
  {
    id: 19,
    productName: "garlic",
    color: "white",
    active: false,
    section: "vegtables",
    price: 4.99,
  },
  {
    id: 20,
    productName: "carrot",
    color: "orange",
    active: false,
    section: "vegtables",
    price: 4.99,
  },
  {
    id: 121,
    productName: "fanta",
    color: "orange",
    active: false,
    section: "drinks",
    price: 6.99,
  },
  {
    id: 122,
    productName: "sprite",
    color: "green",
    active: false,
    section: "drinks",
    price: 6.99,
  },
  {
    id: 155,
    productName: "green bell",
    color: "green",
    active: false,
    section: "vegtables",
    price: 8.0,
  },
];

//===========================================================================================================================================================================================================================================================>
