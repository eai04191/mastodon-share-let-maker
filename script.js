const makeLet = function() {
  const result = document.getElementById("result");
  const usage = document.getElementById("usage");
  const url = document.getElementById("server");
  if (url.value.length == 0) {
    result.style = "display: none;";
    usage.style = "display: none;";
  } else {
    const value = url.value;
    const config = {
      newWindow: document.querySelector(`input[name="newWindow"]`).checked
    }
    if (value) {
      const server = getServer(value);
      const configNewWindow = config.newWindow ? ',"_blank","width=800,height=600"' : "";

      // Original script before convert to bookmarklet.
      // To convert using https://jp.piliapp.com/minify/yui-compressor/
      // (function(a, c, b) {
      //   let note = a.getSelection().toString();
      //   if (note) {
      //       note = "%5Cn> " + note.split("%5Cn").join("%5Cn> ");
      //   }
      //   open(
      //       "https://'+server+'/share?text=" +
      //           b(c.title + "%5Cn" + c.location + note + "%5Cn")
      //   );
      // })(window, document, encodeURIComponent);
      const script = 'javascript:(function(e,f,d){let note=e.getSelection().toString();if(note){note="%5Cn> "+note.split("%5Cn").join("%5Cn> ")}open("https://'+server+'/share?text="+d(f.title+"%5Cn"+f.location+note+"%5Cn")'+configNewWindow+')})(window,document,encodeURIComponent);'
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

document.querySelectorAll(`input[type="text"]`).forEach(input => {
  input.addEventListener("input", makeLet);
});
document.querySelectorAll(`input[type="checkbox"]`).forEach(input => {
  input.addEventListener("change", makeLet);
});
