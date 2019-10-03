var document;

listdata = {
  "Deck" : {
    "description" : "A Note taking application that aims to use NLP and Machine Learning to conver notes into reincfcement learning questions specifically for students",
    "technologies" : ["NLP", "Swift", "ML", "RNN", "Python"],
    "startDate" : "",
    "enddate" : ""
  },

  "SneakAssist" : {
    "description" : "A subscription based application that provides support for limited edition sneaker releases.",
    "technologies" : ["HTML", "CSS", "JS", "MongoDB", "Python"],
    "startDate" : "",
    "endDate" : ""
  },

  "LinkedIn Scraper" : {
    "description" : "A script (ported to Java) to scrape LinkedIn for the purpose of gathering data about alumni at Northeastern.",
    "technologies" : ["Java", "JavaFX", "Selenium"],
    "startDate" : "",
    "endDate" : ""
  },

  "Animator" : {
    "description" : "A simple animation viewer and editor to reinforce OOD principles. Built for CS3500: Object Oriented Design.",
    "technologies" : ["Java", "Swing"],
    "startDate" : "",
    "endDate" : ""
  },

  "Mini-Games" : {
    "description" : "A collection of minigames made for CS2550: Fundamentals of Computer Science II",
    "technologies" : ["Java"],
    "startDate" : "",
    "endDate" : "",
  },

  "Music Player" : {
    "description" : "A musicplayer built in Racket using the big-bang library.",
    "technologies" : ["Racket"],
    "startDate" : "",
    "endDate" : "",
  }
}

function populateList(name, data) {
  const ulElement = document.getElementsByClassName(name)
  for (var project in data) {
    if (object.hasOwnProperty(project)) {
      var listItem = ulElement.createElement("LI")
      listItem.innerHTML = project
      var desc = listItem.createElement("P")
      desc.innerHTML = data[project]["description"]
    }
  }
}
