const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(customers);
});

module.exports = router;

//===========================================================================================================================================================================================================================================================>
//=====JSON=====>
var customers = [
  {
    id: 12,
    customerName: "basic customer  asdasdasdasdasd",
    color: "blue",
    active: false,
  },
  { id: 14231, customerName: "moshe asdasdasd", color: "blue", active: false },
  {
    id: 16462,
    customerName: "yithak cohen asdasdasd",
    color: "red",
    active: true,
  },
  {
    id: 14923,
    customerName: "yaakov asdasdasd",
    color: "white",
    active: false,
  },
  {
    id: 14423,
    customerName: "dani senderson aaaaa",
    color: "red",
    active: true,
  },
  {
    id: 15465,
    customerName: "avi avraamiadasdasd",
    color: "blue",
    active: false,
  },
  {
    id: 10655,
    customerName: "gavriel dos santos",
    color: "blue",
    active: false,
  },
  {
    id: 16907,
    customerName: "aaronasdasdasdasd sssda",
    color: "",
    active: false,
  },
  {
    id: 63818,
    customerName: "asaf abekasis  asdasdasdasdasdasda",
    color: "pink",
    active: false,
  },
  {
    id: 18669,
    customerName: "yossef abuasdasdas",
    color: "white",
    active: false,
  },
  {
    id: 88620,
    customerName: "toto tamuzsssss",
    color: "orange",
    active: false,
  },
  {
    id: 19926,
    customerName: "leonal messiaaaaaa",
    color: "orange",
    active: false,
  },
  {
    id: 12886,
    customerName:
      "christiano-ronaldo-dos-santos-long-name-example aaa bbb cccccccccccccccccccccc",
    color: "green",
    active: false,
  },
  {
    id: 15665 - 4,
    customerName: "davis silva de santos",
    color: "green",
    active: false,
  },
];

//===========================================================================================================================================================================================================================================================>
