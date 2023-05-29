import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogpost", (err, data) => {
    if (err) {
      res.status(500).json({ error: "internal server error" });
    }
    res.status(200).json(data);
  });
}
