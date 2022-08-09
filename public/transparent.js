const addTransparency = () => document.body.classList.add("transparent-nav");
const removeTransparency = () =>
  document.body.classList.remove("transparent-nav");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.y > 0) {
      addTransparency();
    } else {
      removeTransparency();
    }
  });
  observer.observe(document.getElementById("empty-div-row"));
}

window.addEventListener("load", () => {
  addTransparency();
});
