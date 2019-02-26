// Original script before conversion to bookmarklet.

(function (w, d, e) {
    const note = w.getSelection().toString();
    if (note) {
        note = "\r> " + note;
    }
    console.log("https://stellaria.network/share?text=" + e(d.title) + "%20" + e(d.location));
})(window, document, encodeURIComponent);