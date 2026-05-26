const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️ Modo claro";
  } else {
    toggle.textContent = "🌙 Modo oscuro";
  }
});
