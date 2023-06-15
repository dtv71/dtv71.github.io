var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function displayPage(id) {
  //hideAllPages();
  hide(activePage);
  show(id);
  activePage = id;
}

displayPage(activePage);
