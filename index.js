var activePage = "home";

function hide(id) {
  $("#" + id).style.display = "none";
}
function show(id) {
  $(`#${id}`).style.display = "block";
}
function $(selector) {
  return document.querySelector(selector);
}

function displayPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  activePage = id;

  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
}

displayPage(activePage);
