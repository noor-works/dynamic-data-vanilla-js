import {
  menuData,
  createMenu,
  menuToggle,
  subMenuToggle,
  themeToggle,
} from "/components/header/index.js";

createMenu(".navbar-nav", menuData);
menuToggle(".burger", ".navbar-nav");
subMenuToggle(".menu-item-has-children > a");
themeToggle(".theme-toggle");

import { cardData, createCard } from "/components/card/index.js";

createCard(".cards", cardData);

import { accordionData, accordionToggle } from "/components/accordion/index.js";

createCard(".accordion", accordionData);
accordionToggle(".accordion > .single-card");

import { createFooter } from "/components/footer/index.js";

createFooter(".footer-text", "Noor");
