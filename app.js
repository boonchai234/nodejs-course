const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const productrouter = express.Router();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/business-template")));
app.set("views", "./src/views");
app.set("view engine", "ejs")

productrouter.route("/").get((req, res) => {
    res.send("Hello Product")
});
productrouter.route("/1").get((req, res) => {
    res.send("Hello Product_1")
});
app.use("/product", productrouter)

app.get("/", (req, res) => {

    res.render('index', { username: "5555", customer: ["kitti", "kitty", "Kittja"] });
})
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
})