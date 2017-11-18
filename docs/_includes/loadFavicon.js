function loadFavicon(imgElement, href) {
    imgElement.onload = null;

    if (href.startsWith("http://")) {
      imgElement.src = "assets/img/unprotected.png";
      return;
    }

    var hrefArray = href.split( '/' );
    var faviconUrl = hrefArray[0] + '//' + hrefArray[2] + "/favicon.ico";

    imgElement.src = faviconUrl;
}
