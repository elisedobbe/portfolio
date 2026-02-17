window.addEventListener("scroll", function() {
  var tabs = document.querySelector(".md-tabs");
  if (tabs) {
    if (window.scrollY > 20) {
      tabs.style.background = "rgba(30,30,30,0.85)";
      tabs.style.backdropFilter = "blur(8px)";
    } else {
      tabs.style.background = "transparent";
      tabs.style.backdropFilter = "none";
    }
  }
});
