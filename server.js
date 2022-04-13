const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
	cors({
		origin: ["http://127.0.0.1"],
	})
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/msg", (req, res) => {
	console.log(req.body.msg);
	res.send(`Sab badiya bhai ${req.body.msg}`).status(400);
});

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
