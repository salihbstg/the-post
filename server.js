import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import qs from "qs";
// Create Server
const port = 3000;
const apiURL = "http://localhost:4000";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(port, () => {
  console.log("Port 3000!")
});

app.get("/", async (req, res) => {
  const response = await axios.get(`${apiURL}/posts`);
  const result = response.data;
  res.render("index.ejs", { result: result });
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(`${apiURL}/post`, qs.stringify(req.body));
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
});
app.get("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  await axios.delete(`${apiURL}/delete/${id}`);
  res.redirect("/");
})
