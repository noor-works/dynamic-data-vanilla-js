export const createFooter = (element, company) => {
  const year = new Date().getFullYear();
  const paragraphTag = document.querySelector(element);
  paragraphTag.innerHTML = `© ${year} | ${company}`;
};
