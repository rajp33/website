listdata = {
  "Deck" : {
    "description" : "A Note taking application that aims to use NLP and Machine Learning to conver notes into reincfcement learning questions specifically for students",
    "technologies" : ["NLP", "Swift", "ML", "RNN", "Python"],
    "startDate" : "",
    "enddate" : "",
    "imgSrc" : ""
  },

  "SneakAssist" : {
    "description" : "A subscription based application that provides support for limited edition sneaker releases.",
    "technologies" : ["HTML", "CSS", "JS", "MongoDB", "Python"],
    "startDate" : "",
    "endDate" : "",
    "imgSrc" : ""
  },

  "LinkedIn Scraper" : {
    "description" : "A script (ported to Java) to scrape LinkedIn for the purpose of gathering data about alumni at Northeastern.",
    "technologies" : ["Java", "JavaFX", "Selenium"],
    "startDate" : "",
    "endDate" : "",
    "imgSrc" : ""
  },

  "Animator" : {
    "description" : "A simple animation viewer and editor to reinforce OOD principles. Built for CS3500: Object Oriented Design.",
    "technologies" : ["Java", "Swing"],
    "startDate" : "",
    "endDate" : "",
    "imgSrc" : ""
  },

  "Mini-Games" : {
    "description" : "A collection of minigames made for CS2550: Fundamentals of Computer Science II",
    "technologies" : ["Java"],
    "startDate" : "",
    "endDate" : "",
    "imgSrc" : ""
  },

  "Music Player" : {
    "description" : "A musicplayer built in Racket using the big-bang library.",
    "technologies" : ["Racket"],
    "startDate" : "",
    "endDate" : "",
    "imgSrc" : ""
  }
}

function populateList(name, data) {
  const ulElement = document.querySelector(".projectList")
  for (var project in data) {
    if (data.hasOwnProperty(project)) {
      //create List item
      var listItem = document.createElement("LI")
      ulElement.appendChild(listItem)
      //create info Container
      var info = document.createElement("DIV")
      info.class = "cardInfo"
      var name = document.createElement("P")

      listItem.appendChild(info)

      if (data[project]["imgSrc"] != "") { // if Image available
        var img = document.createElement("IMG")
        img.src = data[project]["imgSrc"]
        info.appendChild(img)
      } else {
        //If no Image Available
      }

      name.textContent = project
      info.appendChild(name)
      //create paragraph item
      // var desc = document.createElement("P")
      // desc.textContent = data[project]["description"]
      //listItem.appendChild(desc)
    }
  }
}

populateList("projectList", listdata)
