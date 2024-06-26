const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const teas = [
    {name: "Rooibos", brand: "Twinings"},
    {name: "Earl Grey", brand: "Tetley"},
    {name: "Breakfast", brand: "Yorkshire Tea"},
    {name: "Green", brand: "Lipton"},
    {name: "Assam", brand: "Thomsons"}
]

app.get("/teas", (req, res) => {
    res.status(200).json(teas)
})

app.listen(port, () => {
    console.log(`Demo app listening on port ${port}!`)
})

module.exports = app;
