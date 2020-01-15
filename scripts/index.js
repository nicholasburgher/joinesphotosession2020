function loadPictures(tnm, nm, format, ct) {
  var cardColumns = document.querySelector("#gallery div.card-columns");
  for (var i = 0; i < ct; i++) {
    var formattedNumber = ("0" + (i + 1)).slice(-2);
    console.log(formattedNumber);
    var divElem = document.createElement("div");
    divElem.setAttribute("class", "card");
    var imgElem = document.createElement("img");
    imgElem.setAttribute("class", "card-img-top");
    imgElem.src = "images/thumbs/" + tnm + formattedNumber + "." + format;
    imgElem.setAttribute("onclick","loadModal('" + tnm + formattedNumber + "." + format + "','" + nm + formattedNumber + "." + format + "');");
    imgElem.setAttribute("data-toggle","modal");
    imgElem.setAttribute("data-target","#previewModal");
    divElem.appendChild(imgElem);
    cardColumns.appendChild(divElem);
  }
}

function loadModal(thumbName,fullName) {
  document.getElementById("previewTitle").innerHTML = fullName;
  document.getElementById("selectedImg").src = "images/thumbs/" + thumbName;
  var modalDownloadLink = document.getElementById("modalDownloadLink");
  modalDownloadLink.href = "images/full/" + fullName;
  //modalDownloadLink.download = fullName;
}

window.onload = loadPictures("gatj_thumb-","gatj-","jpg",78);
