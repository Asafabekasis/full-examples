//npm i express
//npm i cors
//npm i --save-dev @types/crypto-js

const express = require("express");
const cors = require("cors");
const { json } = require("express");
var sql = require("mssql");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json({ limit: "500000000mb" }));
app.use(express.urlencoded({ limit: "500000000mb" }));
const CryptoJS = require("crypto-js");
const fs = require("fs");

//---------------------------------------------------------------->
//---------------------------------------------------------------->

app.use(express.json());
app.use(cors());
app.use("/customers", require("./customersRoutes"));
app.use("/auth", require("./authRoutes"));
app.use("/products", require("./productsRoutes"));
app.use(express.json());
app.use(require("cors")());

//---------------------------------------------------------------->
//---------------------------------------------------------------->

//ssl
// const express = require('express');
// const cors = require('cors');
// var sql = require("mssql");
// const app = express();
//  path = require("path")
// app.use(cors())
// app.use(express.json({limit: '500000000mb'}));
// app.use(express.urlencoded({limit: '500000000mb'}));
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var httpServer = http.createServer(app);
// certfile = fs.readFileSync(path.join(__dirname, "sslcert", "examplecrt.crt"))
// keyfile = fs.readFileSync(path.join(__dirname, "sslcert", "examplekey.key"))
// const secureserver = https.createServer({ cert: certfile, key: keyfile, passphrase: "Aa123456" }, app)
// secureserver.listen(3000, console.log(`Server started on port 3000`))

//---------------------------------------------------------------->
//---------------------------------------------------------------->

app.get("/", function (req, res) {
  res.send("HELLO");
});

var server = app.listen(process.env.PORT || 1000, function () {
  console.log("Server is running..");
});

var password = "ExamplePasswordFromServer1234!";
var secretKey = "exampleSecretKeySupportServerAndClient";

app.get("/getdecrypt", function (req, res) {
  let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
  res.send({ password: encryptedPassword });
});

app.post("/postencrypt", function (req, res) {
  console.log("password Before Decrypt:::", req.body.password);
  let decryptedPassword = CryptoJS.AES.decrypt(
    req.body.password,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  console.log("password After Decrypt:::", decryptedPassword);
});
//===========================================================================================================================================================================================================================================================>

var ComplexArrayExample = [customers, products, { example: 1 }, "example"];

app.get("/getcomplex", function (req, res) {
  res.send(ComplexArrayExample);
});

app.get("/getsomething", function (req, res) {
  res.send("something");
});

app.post("/postsomething", function (req, res) {
  res.send("something");
});
//===========================================================================================================================================================================================================================================================>
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get("/requestTime", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});
//===========================================================================================================================================================================================================================================================>
// app.post('/writenewany', function (req, res) {
//     console.log(req.body);
//    let body = req.body.body;
//    let target = req.body.target;
//    target === 'customers'? customers.push(body):products.push(body);
//    let final = target === 'customers'? customers:products;
//     fs.writeFile (target+".json", JSON.stringify(final), function(err) {
//         if (err) throw err;
//         res.send('complete');
//         }
//     );
// })

app.post("/writenewany", function (req, res) {
  console.log(req.body);
  let body = req.body.body;
  let target = req.body.target;
  if (fs.existsSync("./" + req.body.target + ".json")) {
    fs.readFile("./" + req.body.target + ".json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      data = JSON.parse(data);
      data.push(body);
      fs.writeFile(target + ".json", JSON.stringify(data), function (err) {
        if (err) throw err;
        res.send("complete");
      });
    });
  } else {
    target === "customers" ? customers.push(body) : products.push(body);
    let final = target === "customers" ? customers : products;
    fs.writeFile(target + ".json", JSON.stringify(final), function (err) {
      if (err) throw err;
      res.send("complete");
    });
  }
});

app.get("/getnewany/:type", function (req, res) {
  console.log(req.params.type);
  if (fs.existsSync("./" + req.params.type + ".json")) {
    fs.readFile("./" + req.params.type + ".json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      res.send(JSON.parse(data));
    });
  } else {
    res.send([]);
  }
});

app.post("/deleteany", function (req, res) {
  let target = req.body.type;
  console.log(req.body);
  if (fs.existsSync("./" + req.body.type + ".json")) {
    fs.readFile("./" + req.body.type + ".json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      data = JSON.parse(data);
      data.splice(req.body.i, 1);
      fs.writeFile(target + ".json", JSON.stringify(data), function (err) {
        if (err) throw err;
        res.send("complete");
      });
    });
  } else {
    target === "customers"
      ? customers.splice(req.body.i, 1)
      : products.splice(req.body.i, 1);
    let final = target === "customers" ? customers : products;
    fs.writeFile(target + ".json", JSON.stringify(final), function (err) {
      if (err) throw err;
      res.send("complete");
    });
  }
});

//===========================================================================================================================================================================================================================================================>
// var config = {
//   user: "SA",
//   password: "",
//   server: "",
//   port: 7000,
//   database: "",
//   options: {
//     encrypt: false,
//     enableArithAbort: true,
//   },
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 10000,
//   },
// };

// sql.connect(config, function (err) {
//   if (err) console.log(err);
//   console.log("connected");
// });

var executeQuery = function (res, query, parameters) {
  sql.connect(config, function (err) {
    if (err) {
      console.log("there is a database connection error -> " + err);
      res.send(err.name);
    } else {
      // create request object
      var request = new sql.Request();

      // Add parameters
      parameters.forEach(function (p) {
        request.input(p.name, p.sqltype, p.value);
      });

      // for(let x =0;x<parameters.length;x++){
      //   request.input(parameters[x].name, parameters[x].sqltype, parameters[x].value);
      // }

      // query to the database
      request.query(query, function (err, result) {
        if (err) {
          console.log("error while querying database -> " + err);
          res.send(err.name);
        } else {
          res.send(result);
          sql.close();
        }
      });
    }
  });
};
//===========================================================================================================================================================================================================================================================>

app.post("/product/update", function (req, res) {
  var parameters = [
    { name: "productName", sqltype: sql.NVarChar, value: req.body.TeudaNum },
    { name: "productPrice", sqltype: sql.NVarChar, value: req.body.TeudaNum },
    { name: "productId", sqltype: sql.NVarChar, value: req.body.Truck },
  ];

  var query =
    "update MSFDB.dbo.Products set productName = @productName where productId = @productId";
  executeQuery(res, query, parameters);
});

app.post("/product/new", function (req, res) {
  var parameters = [
    { name: "productName", sqltype: sql.NVarChar, value: req.body.productName },
    {
      name: "productPrice",
      sqltype: sql.NVarChar,
      value: req.body.productPrice,
    },
    { name: "productId", sqltype: sql.NVarChar, value: req.body.productId },
  ];

  var query =
    "INSERT INTO [dbo].[Products] (productName,productId,productPrice) VALUES(@productName,@productId,@productPrice)";
  executeQuery(res, query, parameters);
});

app.get("/product/:productName", function (req, res) {
  var parameters = [
    {
      name: "productName",
      sqltype: sql.NVarChar,
      value: req.params.productName,
    },
  ];

  var query =
    "select * from DataBaseName.dbo.Products where productName = @productName";
  executeQuery(res, query, parameters);
});

app.get("/products", function (req, res) {
  var parameters = [{ name: "", sqltype: sql.NVarChar, value: "" }];

  var query = "select * from DataBaseName.dbo.Products";
  var query = "select [productName],[productId] from DataBaseName.dbo.Products";

  executeQuery(res, query, parameters);
});

//===========================================================================================================================================================================================================================================================>
//Email

app.post("/Email", function (req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aaa@gmail.com",
      pass: "password",
    },
  });

  var html = "<h2>Example</h2>";

  var mailOptions = {
    from: "aaa@gmail.com",
    to: req.body.Email,
    subject: "הזמנה נשלחה!",
    html: html,
  };

  setTimeout(() => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }, 100);
});

//===========================================================================================================================================================================================================================================================>
//=====JSON=====>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
