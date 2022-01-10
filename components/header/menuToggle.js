const toggleElement = (trigger, element) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    trigger.classList.toggle("active");
    element.classList.toggle("active");
  });
};

export const menuToggle = (trigger, element) => {
  toggleElement(
    document.querySelector(trigger),
    document.querySelector(element)
  );
};
