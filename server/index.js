const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  let fortune = ["7 days",
					 "He who does not wipe is wiped by life",
					 "The swiftest horse can't overtake a word once spoken",
           "Before telling secrets on the road, look in the bushes.",
           "A sharp tongue or pen can kill without a knife"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.post("/api/addfortune", (req, res) => {
  const randomFortunes = ["A bad word whispered echoes a hundred miles",
					 "In a flood of words, surely some mistakes",
					 "To build it took one hundred years; to destroy it one day",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * randomFortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
