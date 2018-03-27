express = require("express");
app = express();

app.get("/", function(req, res){
  res.send("Welcome to my app!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  res.send(animal + " says hi!")
})
app.get("/repeat/:string/:count", function(req, res){
  var string = req.params.string;
  var count = req.params.count;
  var result = ""
  for (var i = 0; i < parseInt(count); i++) {
    result += string + " "
  };
  res.send(result);
});
app.get("*", function(req, res){
  res.send("Page not found");
});

app.listen(3000);
