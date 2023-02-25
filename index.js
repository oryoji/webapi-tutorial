const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// お客様情報をサーバーに置いておく
const customers = [
  { name: "佐藤", id: 1 },
  { name: "田中", id: 2 },
  { name: "加藤", id: 3 },
  { name: "高橋", id: 4 },
  { name: "鈴木", id: 5 },
];

// データを取得できるようにしよう（GETメソッド）
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  res.send(customer);
});

// データを作成（postメソッド）
app.post("/api/customers", (req, res) => {
  const customer = {
    name: req.body.name,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
});

// データを更新（putメソッド）
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.name = req.body.name;
  res.send(customer);
});

// データを削除（deleteメソッド）
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  res.send(customer);
});
