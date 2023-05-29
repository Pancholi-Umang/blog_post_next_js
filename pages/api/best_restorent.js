import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogpost/best_restorent.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "no such any blogs" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
