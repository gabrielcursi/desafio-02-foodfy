const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')
const recipes = require('./data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function(req, res) {
  return res.render("index", { receitas })
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", { receitas })
})

// server.get("/receita/:index", function (req, res) {
//   const recipes = [receitas]; // Array de receitas carregadas do data.js
//   const recipeIndex = req.params.index;
//   console.log(recipes[recipeIndex]);

//   return res.send(recipes[recipeIndex])
// }) 

server.get("/recipes/:index", function (req, res) {
  // const recipes = [...receitas]; // Array de receitas carregadas do data.js

  const recipeIndex = req.params.index;

    return res.render("recipe", { recipe: recipes[recipeIndex] });
})



server.listen(3333, function () {
  console.log("Server is running");
});
