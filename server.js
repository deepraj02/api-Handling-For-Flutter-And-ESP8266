const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

let ledNumber;
app.use(
	cors()
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/ledNumber", (req, res) => {
	console.log(req.body.led);
	ledNumber = req.body.led;
	res.send(`Sab badiya bhai led-On:${req.body.led}`).status(200);
});

app.get("/ledNumber", (req,res)=>{
	if(!ledNumber){
		res.status(404).send("No led set Currently")
	}
	res.status(200).send(ledNumber);
})

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
