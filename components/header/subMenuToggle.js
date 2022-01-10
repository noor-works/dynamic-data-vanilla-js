const toggleElementAll = (element) => {
  element.forEach((eachElement) => {
    eachElement.addEventListener("click", (event) => {
      event.preventDefault();
      eachElement.classList.toggle("active");
    });
  });
};

export const subMenuToggle = (element) => {
  toggleElementAll(document.querySelectorAll(element));
};
