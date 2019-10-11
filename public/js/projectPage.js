
//create a tile container and append it to the given webelement
function createRow(webElement) {
  var row = document.createElement("DIV")
  row.classList.add("tile")
  webElement.appendChild(row)
  return row
}

function getJSON(path) {
  var request = new XMLHttpRequest();
     request.open("GET", path, false);
     request.send(null)
     return JSON.parse(request.responseText);
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
      var figure = document.createElement("FIGURE")
      figure.classList.add("image")
      var img = document.createElement("IMG")
      img.src = data[project]["imgSrc"]
      figure.appendChild(img)
      article.appendChild(figure)
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

var listdata = getJSON("../../listdata.json")

populateList("projectList", listdata)
