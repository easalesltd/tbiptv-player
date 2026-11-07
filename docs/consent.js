(function () {
  var key = "tbiptv-consent";
  if (localStorage.getItem(key)) return;

  var bar = document.createElement("div");
  bar.setAttribute("role", "dialog");
  bar.setAttribute("aria-label", "Visit counting");
  bar.style.cssText = [
    "position:fixed",
    "left:16px",
    "right:16px",
    "bottom:16px",
    "z-index:40",
    "display:flex",
    "flex-wrap:wrap",
    "gap:12px",
    "align-items:center",
    "justify-content:space-between",
    "max-width:1040px",
    "margin:0 auto",
    "padding:16px 18px",
    "background:#14171E",
    "color:#F0F0F0",
    "border:1px solid #2A3140",
    "border-radius:16px",
    "box-shadow:0 18px 46px rgba(0,0,0,.42)",
    "font:20px/1.4 Segoe UI,system-ui,-apple-system,sans-serif"
  ].join(";");

  var text = document.createElement("p");
  text.style.cssText = "margin:0;flex:1 1 280px";
  text.textContent = "This site uses Google to count visits. The app itself does not.";

  var actions = document.createElement("div");
  actions.style.cssText = "display:flex;gap:10px";

  function button(label, filled) {
    var el = document.createElement("button");
    el.type = "button";
    el.textContent = label;
    el.style.cssText = [
      "font:inherit",
      "font-weight:700",
      "font-size:18px",
      "padding:10px 16px",
      "border-radius:10px",
      "cursor:pointer",
      filled ? "background:#5A8EFF;color:#fff;border:0" : "background:transparent;color:#5A8EFF;border:2px solid #5A8EFF"
    ].join(";");
    return el;
  }

  var allow = button("Allow", true);
  var refuse = button("Refuse", false);
  allow.addEventListener("click", function () {
    gtag("consent", "update", { analytics_storage: "granted" });
    localStorage.setItem(key, "granted");
    bar.remove();
  });
  refuse.addEventListener("click", function () {
    localStorage.setItem(key, "denied");
    bar.remove();
  });

  actions.appendChild(refuse);
  actions.appendChild(allow);
  bar.appendChild(text);
  bar.appendChild(actions);
  document.body.appendChild(bar);
})();
