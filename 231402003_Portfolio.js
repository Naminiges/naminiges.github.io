// toggle dan navigasi responsif
const navSlide = () => {
  const show = document.querySelector(".show");
  const navList = document.querySelector("nav");

  show.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    show.classList.toggle("toggle-show");
  });
};

navSlide();

//bersihkan form setelah submit

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
