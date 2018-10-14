let input = document.getElementById("instance");

let makeLet = function() {
  let value = input.value;
  console.log(value);
  if (value) {
    let instance = getInstance(value);
    let result = document.getElementById("result");
    result.innerHTML = `<h2><a href="javascript:void(open('https://${instance}/share?text='+encodeURIComponent(document.title)+'%20'+encodeURIComponent(document.location)))">Toot! at ${instance}</a></h2>`;
    let usage = document.getElementById("usage");
    usage.style = "display: block;";
  }
};

function getInstance(value) {
  if (value.includes(":")) {
    value = getHostnameFromString(value);
  }
  return value;
}

function getHostnameFromString(path) {
  var result = path.replace(/\\/g, "/").match(/\/\/([^/]*)/);
  if (!result) return "";
  return result[1];
}

input.addEventListener("input", makeLet);
