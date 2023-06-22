let activePage = "home";

function hide(id) {
  $("#" + id).style.display = "none";
}
function show(id) {
  const page = $(`#${id}`);
  page.style.display = "block";
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
function initEvents() {
  function clickOnMenu(e) {
    if (e.target.matches("a")) {
      const id = e.target.dataset.page;
      console.info("clickOnMenu", e.target);
      if (id) {
        displayPage(id);
      } else {
        console.warn("eroare, nu este data-page bun");
      }
    }
  }
  $("#top-menu-bar").addEventListener("click", clickOnMenu);
}

function showSkillList(skills) {
  const ul = $("#skills ul");
  //console.log(skills);

  //return a.name.localeCompare(b.name);
  skills.sort((a, b) => a.endorsements - b.endorsements);

  var skillsHtml = skills.map((skill) => {
    var className = skill.favorite ? "favorite" : "";
    return `<li class="${className}">${skill.name} · <span>${skill.endorsements}</span></li>`;
  });
  ul.innerHTML = skillsHtml.join("");
}

function getSkillsRequest() {
  fetch("skills.json")
    .then((r) => r.json())
    .then(showSkillList);
}

function showProjectsList(prj) {
  const divPrj = $("#container-projects");
  //console.log(skills);

  //return a.name.localeCompare(b.name);
  //skills.sort((a, b) => a.endorsements - b.endorsements);

  var projectsHtml = prj.map((prj, i) => {
    const listaPrj = `<div class="project-card">
    <h3>${i + 1})&nbsp;<a href="${prj.url}" target="${prj.target}">${
      prj.numeProiect
    }</a></h3>
    <p>${prj.descriere}</p>
    <a href="${prj.url}" target="${prj.target}"><img src="${
      prj.imgUrl
        ? prj.imgUrl
        : "https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
    }" height="150"></a>
    </div>`;
    return listaPrj;
  });
  divPrj.innerHTML = projectsHtml.join("");
}

function getProjectsRequest() {
  fetch("projects.json")
    .then((r) => r.json())
    .then(showProjectsList);
}
displayPage(activePage);
initEvents();
getSkillsRequest();
getProjectsRequest();
