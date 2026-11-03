// Theme toggle: remembers the choice, falls back to the system setting.
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var root = document.documentElement;
    var dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    var next = dark ? "light" : "dark";
    var apply = function () {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    };
    document.startViewTransition ? document.startViewTransition(apply) : apply();
  });
})();

// Lite YouTube embed: the iframe is only created when the cover is clicked.
document.querySelectorAll(".video[data-yt]").forEach(function (el) {
  var play = function () {
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(el.dataset.yt) + "?autoplay=1";
    f.title = el.getAttribute("aria-label") || "Video";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    el.replaceChildren(f);
    el.removeAttribute("role");
    el.removeAttribute("tabindex");
    el.classList.add("playing");
  };
  el.addEventListener("click", play, { once: true });
  el.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
  });
});
