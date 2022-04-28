const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;


app.use(
	cors()
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const leds=[1,2,3,4,5,6]
const Leds = {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0}
app.post("/", (req, res) => {
	console.log(`led: ${req.body.led}`);
	if (leds.includes(req.body.led)){
	Leds[req.body.led]=Leds[req.body.led]==0?1:0
	res.json(`Led number ${req.body.led} is now ${Leds[req.body.led]==0?'off':'on'}`).status(200);}
	else if(req.body.led == null){
		Leds[1]=0
		Leds[2]=0
		Leds[3]=0
		Leds[4]=0
		Leds[5]=0
		Leds[6]=0
		res.status(200).json("All LEDs are off now.")
	}
	else{
		res.status(200).json("Please dont fuck the server and send a number between 1-6 or null");
	}
});

app.get("/", (req,res)=>{
	res.status(200).json(Leds);
})

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
