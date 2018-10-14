const input = document.getElementById("instance");

const makeLet = function() {
  const result = document.getElementById("result");
  const usage = document.getElementById("usage");
  if (input.value.length == 0) {
    result.style = "display: none;";
    usage.style = "display: none;";
  } else {
    const value = input.value;
    if (value) {
      const instance = getInstance(value);
      result.innerHTML = `<h2><a href="javascript:void(open('https://${instance}/share?text='+encodeURIComponent(document.title)+'%20'+encodeURIComponent(document.location)))">Toot! at ${instance}</a></h2>`;
      result.style = "display: block;";
      usage.style = "display: block;";
    }
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
