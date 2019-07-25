// Original script before convert to bookmarklet.
// To convert using https://jp.piliapp.com/minify/yui-compressor/

(function(a, c, b) {
    let note = a.getSelection().toString();
    if (note) {
        note = "%5Cn> " + note.split("%5Cn").join("%5Cn> ");
    }
    open(
        "https://'+server+'/share?text=" +
            b(c.title + "%5Cn" + c.location + note + "%5Cn")
    );
})(window, document, encodeURIComponent);
