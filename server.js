const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

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

server.get("/receitas", function(req, res) {
  return res.render("receitas")
})

server.get("/about", function(req, res) {
  return res.render("about")
})


server.listen(3333, function () {
  console.log("Server is running");
});
