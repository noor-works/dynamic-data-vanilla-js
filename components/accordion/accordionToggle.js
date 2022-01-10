const toggleElementAll = (element) => {
  element.forEach((eachElement) => {
    eachElement.addEventListener("click", (event) => {
      event.preventDefault();
      if (eachElement.classList.contains("active")) {
        eachElement.classList.toggle("active");
      } else {
        element.forEach((eachElement) =>
          eachElement.classList.remove("active")
        );
        eachElement.classList.add("active");
      }
    });
  });
};

export const accordionToggle = (element) => {
  toggleElementAll(document.querySelectorAll(element));
};
