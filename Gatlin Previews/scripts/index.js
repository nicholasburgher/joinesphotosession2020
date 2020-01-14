function loadPictures(nm, format, ct) {
  var cardColumns = document.querySelector("#gallery div.card-columns");
  for (var i = 0; i < ct; i++) {
    var formattedNumber = ("0" + (i + 1)).slice(-2);
    console.log(formattedNumber);
    var divElem = document.createElement("div");
    divElem.setAttribute("class", "card");
    var imgElem = document.createElement("img");
    imgElem.setAttribute("class", "card-img-top");
    imgElem.src = "images/" + nm + formattedNumber + "." + format;
    divElem.appendChild(imgElem);
    cardColumns.appendChild(divElem);
  }
}

window.onload = loadPictures("gatj-","jpg",65);
