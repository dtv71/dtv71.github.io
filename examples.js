var employed = false;
var age = 24;
var name = "First Last";

console.info(typeof employed);
console.info(typeof age);
console.info(typeof name);

var skills = [1, "html", `css`, "js", true];

var person = {
  name: "Tarta Dan",
  employed: true,
  age: 52,
};

console.warn(typeof person, person);

// object DOM
var el = document.getElementById("job-title");
console.log(el.innerHTML);

function h() {
  return "h";
}

const f = function () {
  return "f";
};

const a = () => {
  return "a";
};
console.log(h());
console.log(f()); // Cannot access 'f' before initialization
console.log(a());
