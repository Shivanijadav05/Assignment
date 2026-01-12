const menu = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menu.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
  });