var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function displayPage(id) {
  hide(activePage);
  document
    .querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    .classList.remove("active");
  activePage = id;

  show(id);
  document
    .querySelector(`#top-menu-bar a[data-page="${id}"]`)
    .classList.add("active");
}

displayPage(activePage);
