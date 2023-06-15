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
  var ul = $("#skills ul");
  var skills = ["HTML", "CSS", "JS"];
  var skillsHtml = skills.map(function (skill) {
    //<li class="favorite">HTML</li>
    return "<li>" + skill + "</li>";
  });
  console.log(skillsHtml);
  ul.innerHTML = skillsHtml.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkillList();
