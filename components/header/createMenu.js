const menuBuilder = (element, data) => {
  data.forEach(({ title, link, sub }) => {
    const listItem = document.createElement("li");

    const anchorTag = document.createElement("a");

    anchorTag.innerHTML = title;

    anchorTag.setAttribute("href", link);

    element.appendChild(listItem);

    listItem.appendChild(anchorTag);

    if (sub) {
      listItem.classList.add("menu-item-has-children");

      const subUl = document.createElement("ul");

      subUl.classList.add("sub-menu");

      listItem.appendChild(subUl);

      menuBuilder(subUl, sub);
    }
  });
};

export const createMenu = (element, data) => {
  menuBuilder(document.querySelector(element), data);
};
