document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector(".md-header__inner .md-header__title");
  if (!title) {
    title = document.querySelector(".md-header__title");
  }
  if (!title) {
    title = document.querySelector(".md-header__topic .md-ellipsis");
  }
  if (title) {
    title.style.cursor = "pointer";
    var parent = title.closest(".md-header__title") || title;
    parent.style.cursor = "pointer";
    parent.addEventListener("click", function() {
      window.location.href = "/portfolio/";
    });
  }
});
