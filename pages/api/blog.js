import * as fs from "fs";

export default async function handler(req, res) {
  let data = fs.promises.readdir("blogpost");
  let myfile;
  let allBlogs = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogpost/" + item);
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
