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

app.get("/api/users", (req, res) => {
  let users = ["Robert",
					 "Kaylee",
					 "Nathan",
           "Eric",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * users.length);
  let randomUser = users[randomIndex];

  res.status(200).send(randomUser);
  
});

app.get("/api/weather", (req, res) => {
  let weather = ["Sunny",
					 "Rainy",
					 "Overcast",
           "Cold",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * weather.length);
  let randomWeather = weather[randomIndex];

  res.status(200).send(randomWeather);
  
});

app.get("/api/time", (req, res) => {
  let time = ["Day",
					 "Night"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * time.length);
  let randomTime = time[randomIndex];

  res.status(200).send(randomTime);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
