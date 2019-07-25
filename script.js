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
      const script = 'javascript:(function(e,f,d){let note=e.getSelection().toString();if(note){note="%5Cn> "+note.split("%5Cn").join("%5Cn> ")}open("https://'+server+'/share?text="+d(f.title+"%5Cn"+f.location+note+"%5Cn"))})(window,document,encodeURIComponent);';
      result.innerHTML = `<h2><a>Toot! at ${server}</a></h2>`;
      result.querySelector("a").href = script;
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
