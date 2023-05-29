import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogpost/food.json", "utf-8", (err, data) => {
    // console.log(req.query) if you using slug
    if (err) {
      res.status(500).json({ error: "internal server error" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
