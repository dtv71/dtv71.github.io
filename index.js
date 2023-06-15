function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
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
  show(id);
}

displayPage("home");
