(function () {
  // Theme toggle
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("ada-theme", next); } catch (e) {}
    });
  }

  // Copy buttons (terminal + code blocks)
  document.querySelectorAll(".copy-button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-copy");
      var text = "";
      if (id) {
        var el = document.getElementById(id);
        if (el) text = el.textContent.trim();
      } else {
        var pre = btn.closest(".code-block")?.querySelector("pre code") || btn.closest(".code-inline")?.querySelector("code");
        if (pre) text = pre.textContent.trim();
      }
      if (!text) return;
      navigator.clipboard.writeText(text).then(function () {
        var prev = btn.textContent;
        btn.textContent = "已复制";
        btn.classList.add("copied");
        setTimeout(function () { btn.textContent = prev; btn.classList.remove("copied"); }, 1500);
      });
    });
  });

  // Back to top
  var back = document.querySelector(".back-to-top");
  if (back) {
    var onScroll = function () {
      if (window.scrollY > 400) back.classList.add("visible");
      else back.classList.remove("visible");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Page TOC: highlight active section while scrolling
  var tocLinks = document.querySelectorAll(".page-toc a");
  if (tocLinks.length) {
    var sections = Array.from(tocLinks).map(function (a) {
      var id = a.getAttribute("href").slice(1);
      return document.getElementById(id);
    }).filter(Boolean);

    var onScrollToc = function () {
      var top = window.scrollY + 120;
      var active = sections[0]?.id;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= top) active = sections[i].id;
      }
      tocLinks.forEach(function (a) {
        if (a.getAttribute("href") === "#" + active) a.classList.add("active");
        else a.classList.remove("active");
      });
    };
    window.addEventListener("scroll", onScrollToc, { passive: true });
    onScrollToc();
  }
})();
