
var url =require("url");
const router = function (req, res) {
  var a = parseFloat(req.body.a);
  var b = parseFloat(req.body.b);
  var result = a + b;


  res.json({
    "ret": 1000,
    "version": 3,
    "action": "plus",
    "result": result
  });
};


module.exports.router = router;