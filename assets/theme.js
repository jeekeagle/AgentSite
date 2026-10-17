// Apply saved theme before styles load to avoid a flash.
(function () {
  try {
    var saved = localStorage.getItem("ada-theme");
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {}
})();
