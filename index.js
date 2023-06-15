function hide(id) {
  document.getElementById(id).style.display = "none";
}
function hideAllPages() {
  hide("home");
  hide("skills");
  hide("languages");
  hide("projects");
  // document.getElementsByClassName("page").style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  var page = document.getElementById(id);
  page.style.display = "block";
}

displayPage("home");
