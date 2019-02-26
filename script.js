const input = document.getElementById("server");

const makeLet = function() {
  const result = document.getElementById("result");
  const usage = document.getElementById("usage");
  if (input.value.length == 0) {
    result.style = "display: none;";
    usage.style = "display: none;";
  } else {
    const value = input.value;
    if (value) {
      const server = getServer(value);
      const script = `javascript:(function(w%2Cd%2Ce)%7Blet%20note%3Dw.getSelection().toString()%3Bif(note)%7Bnote%3D%22%5Cn%3E%20%22%20%2B%20note%3B%7Dopen(%22https%3A%2F%2F${server}%2Fshare%3Ftext%3D%22%2Be(d.title%20%2B%20%22%5Cn%22%20%2B%20d.location%20%2B%20note%20%2B%20%22%5Cn%22))%3B%7D)(window%2Cdocument%2CencodeURIComponent)%3Bvoid(0);`;
      result.innerHTML = `<h2><a href="${script}">Toot! at ${server}</a></h2>`;
      result.style = "display: block;";
      usage.style = "display: block;";
    }
  }
};

function getServer(value) {
  if (value.includes(":")) {
    value = getHostnameFromString(value);
  }
  return value;
}

function getHostnameFromString(path) {
  const result = path.replace(/\\/g, "/").match(/\/\/([^/]*)/);
  if (!result) return "";
  return result[1];
}

input.addEventListener("input", makeLet);
