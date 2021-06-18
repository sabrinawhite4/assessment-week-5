const express = require("express");
const cors = require("cors");
const gradient = require("gradient-string");
const { createDog, updateDog, getAllDogs } = require("../dogController");
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["You are incredible! Keep up the good work!",
					 "Hey! You're cute",
					 "You're a master coder! ",
];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);   
});

app.get("/api/fortune", (req,res) => {

  const fortune = [ "A fresh start will put you on your way." , "Change is happening in your life, so go with the flow!", "Believe in yourself and others will too.", "Failure is the chance to do better next time.","From now on your kindness will lead you to success.",
];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.post("/api/dogs",createDog);
app.put("/api/dogs/:id", updateDog);
app.get("api/dogs", getAllDogs);

app.listen(4000, () => console.log(gradient.instagram("Server running on 4000")));
