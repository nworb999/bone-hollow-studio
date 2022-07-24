if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.y > 0) {
      document.body.classList.add("transparent-nav");
    } else {
      document.body.classList.remove("transparent-nav");
    }
  });
  observer.observe(document.getElementById("empty-div-row"));
}
