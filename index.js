const path = require('path')
const port = 8000;

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port);