var activePage = "skills";

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

function clickOnMenu(e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    console.info("clickOnMenu", e.target);
    if (id) {
      displayPage(id);
    } else {
      console.warn("eroare, nu este data-page bun");
    }
  }
}

function showSkillList() {
  var skills = [
    { name: "HTML", favorite: true },
    { name: "CSS" },
    { name: "JS", favorite: true },
  ];

  var ul = $("#skills ul");

  var skillsHtml = skills.map(function (skill) {
    var className = skill.favorite ? "favorite" : "";
    return `<li class="${className}">${skill.name}</li>`;
  });
  console.log(skillsHtml);
  ul.innerHTML = skillsHtml.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkillList();
