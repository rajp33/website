listdata = {
  "Deck" : {
    "description" : "A Note taking application that aims to use NLP and Machine Learning to convert notes into reinforcement learning questions specifically for students",
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
    "imgSrc" : "/img/animator.png"
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

//create a tile container and append it to the given webelement
function createRow(webElement) {
  var row = document.createElement("DIV")
  row.classList.add("tile")
  webElement.appendChild(row)
  return row
}

function createGrid(data, maxCol, parent) {
  var row_count = 0
  //for each data create tile
  for (var project in data) {
    //change row
    if (row_count % maxCol == 0) {
      currentRow = createRow(parent)
    }

    var tileparent = document.createElement("DIV")
    tileparent.classList.add("tile", "is-parent")
    var article = document.createElement("ARTICLE")
    article.classList.add("tile", "is-child", "box")

    var name = document.createElement("P")
    name.textContent = project
    article.appendChild(name)

    var desc = document.createElement("P")
    desc.textContent = data[project]["description"]
    desc.classList.add("subtitle")
    article.appendChild(desc)

    if (data[project]["imgSrc"] != "") { // if Image available
      var img = document.createElement("IMG")
      img.src = data[project]["imgSrc"]
      info.appendChild(img)
    }

    tileparent.appendChild(article)
    currentRow.appendChild(tileparent)
    row_count++
  }
}

function populateList(name, data) {
  const ulElement = document.querySelector(".projectList")
      //create List item
      // var listItem = document.createElement("DIV")
      // listItem.classList.add("tile", "is-parent")
      // ulElement.appendChild(listItem)
      // //create info Container
      // var info = document.createElement("DIV")
      // info.classList.add("tile", "cardInfo")
      // var name = document.createElement("P")
      // name.classList.add("title", "cardName")
      //
      // listItem.appendChild(info)
      //
      //
      // name.textContent = project
      // info.appendChild(name)
      // //create paragraph item
      // // var desc = document.createElement("P")
      // // desc.textContent = data[project]["description"]
      // //listItem.appendChild(desc)

      //create a vertical container for the element
      var vertical = createRow(ulElement)
      vertical.classList.add("is-vertical")

      createGrid(data, 3, vertical)
      //create initial row
      //var currentRow = createRow(vertical)
}

populateList("projectList", listdata)
