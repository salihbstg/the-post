import express from "express";
import bodyParser from "body-parser";
const port = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // body-parser middleware
//Get all post
app.get("/posts", (req, res) => {
  res.json(posts);
});
app.post("/post", (req, res) => {
  // Kontrol için eklendi
  const newData = {
    id: posts.length + 1,
    title: req.body.title,
    description: req.body.description,
    auth: req.body.auth,
    date: new Date(),
  };
  posts.push(newData);
  res.status(201).json(posts);
});
app.delete("/delete/:id",(req,res)=>{
  const postIndex=posts.findIndex(temp=>temp.id===parseInt(req.params.id));
  console.log(postIndex);
  posts.splice(postIndex,1);
  res.json(posts);
})
let posts = [
  {
    id: 1,
    title: "Lorem ipsum dolo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis eveniet quos eius? Delectus neque est vel ipsum molestiae dolor nisi asperiores, esse quasi minus a odio tenetur soluta aliquam nihil quaerat veniam autem ullam repellat. Deleniti nulla in numquam vitae animi dicta debitis unde quo. Molestias impedit ipsa suscipit id rem animi libero nam cum quos exercitationem, itaque ullam, accusamus voluptatum illo velit? Inventore deserunt eligendi autem aspernatur ea, ex praesentium eius reiciendis, voluptatum distinctio quis molestias odit asperiores qui? Id, aliquam aliquid incidunt corrupti a tempore consequatur laborum suscipit quas esse eveniet aperiam ratione iusto quaerat voluptatum illo?    ",
    auth: "Salihcan Bastug",
    date: new Date(),
  },
  {
    id: 2,
    title: "Lorem ipsum dolo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis eveniet quos eius? Delectus neque est vel ipsum molestiae dolor nisi asperiores, esse quasi minus a odio tenetur soluta aliquam nihil quaerat veniam autem ullam repellat. Deleniti nulla in numquam vitae animi dicta debitis unde quo. Molestias impedit ipsa suscipit id rem animi libero nam cum quos exercitationem, itaque ullam, accusamus voluptatum illo velit? Inventore deserunt eligendi autem aspernatur ea, ex praesentium eius reiciendis, voluptatum distinctio quis molestias odit asperiores qui? Id, aliquam aliquid incidunt corrupti a tempore consequatur laborum suscipit quas esse eveniet aperiam ratione iusto quaerat voluptatum illo?    ",
    auth: "Salihcan Bastug",
    date: new Date(),
  },
  {
    id: 3,
    title: "Lorem ipsum dolo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis eveniet quos eius? Delectus neque est vel ipsum molestiae dolor nisi asperiores, esse quasi minus a odio tenetur soluta aliquam nihil quaerat veniam autem ullam repellat. Deleniti nulla in numquam vitae animi dicta debitis unde quo. Molestias impedit ipsa suscipit id rem animi libero nam cum quos exercitationem, itaque ullam, accusamus voluptatum illo velit? Inventore deserunt eligendi autem aspernatur ea, ex praesentium eius reiciendis, voluptatum distinctio quis molestias odit asperiores qui? Id, aliquam aliquid incidunt corrupti a tempore consequatur laborum suscipit quas esse eveniet aperiam ratione iusto quaerat voluptatum illo?    ",
    auth: "Salihcan Bastug",
    date: new Date(),
  },
];
app.listen(port, () => {
  console.log("Port 4000!")
});
