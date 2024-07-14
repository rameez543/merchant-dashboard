const bodyParser = require("body-parser");
const app = require("express")();
app.use(bodyParser.json());
app.get("/get-data", (req, res) => {});
app.get("/transactions", (req, res) => {
  try {
    trx = [
      {
        id: 0,
        trxName: "Dummy trx",
        category: "personal",
        amount: 10,
        date: new Date(),
      },
      {
        id: 1,
        trxName: "Dummy trx 1",
        category: "personal",
        amount: 10,
        date: new Date(),
      },
      {
        id: 3,
        trxName: "Dummy trx 2",
        category: "personal",
        amount: 10,
        date: new Date(),
      },
      {
        id: 4,
        trxName: "Dummy trx 3",
        category: "personal",
        amount: 10,
        date: new Date(),
      },
      {
        id: 4,
        trxName: "Dummy trx 4",
        category: "personal",
        amount: 10,
        date: new Date(),
      },
    ];
    const data = {
      transactions: trx,
    };
    res.json(data);
  } catch (err) {
    return res.status(400).send({
      message:
        err && Object.keys(err).length !== 0 ? err : "something went wrong",
    });
  }
});
module.exports = app;
