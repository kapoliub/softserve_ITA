document.addEventListener("keyup", (e) => {
  const houseWindow = document.querySelector(".window");
  if (e.key === "Enter") {
    houseWindow.classList.toggle("activeWindow");
  }
});
