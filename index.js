const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const Twitter = require("twitter");

const getCustomerKey = require("./seacretDirectory/customerKey");
const getCustomerSeacret = require("./seacretDirectory/customerSeacret");
const getAccsessToken = require("./seacretDirectory/accsessTokenKey");
const getAccsessTokenSeacret = require("./seacretDirectory/accsessTorknSeacret");

const client = new Twitter({
  consumer_key: getCustomerKey(),
  consumer_secret: getCustomerSeacret(),
  access_token_key: getAccsessToken(),
  access_token_secret: getAccsessTokenSeacret(),
});

//get
app.get("/api", (req, res) => {
  res.json({ message: "Bad Request" });
});

//post
app.post("/api", (req, res) => {
  const detail_id = req.query.id;

  if (detail_id === "") {
    res.json({ message: "Bad Request" });
  } else {
    const params = {
      status:
        "以下のものを作成しました。\n" +
        "詳しくは下記サイトへ。\n" +
        "https://watataku-portfolio.web.app/works/detail/" +
        detail_id +
        "/page/1/categoryId/0",
    };

    client.post("statuses/update", params, (error, tweet) => {
      if (!error) {
        res.json(tweet);
      } else {
        res.json(error);
      }
    });
  }
});

//put
app.put("/api", (req, res) => {
  const detail_id = req.query.id;
  if (detail_id === "") {
    res.json({ message: "Bad Request" });
  } else {
    const params = {
      status:
        "以下のものを作成しました。\n" +
        "詳しくは下記サイトへ。\n" +
        "https://watataku-portfolio.web.app/works/detail/" +
        detail_id +
        "/page/1/categoryId/0",
    };

    client.post("statuses/update", params, (error, tweet) => {
      if (!error) {
        res.json(tweet);
      } else {
        res.json(error);
      }
    });
  }
});

//delete
app.delete("/api", (req, res) => {
  res.json({ message: "Bad Request" });
});

const port = process.env.PORT || 3080;
app.listen(port);
console.log("ポート番号" + port + "でWebサーバが立ち上がりました");
