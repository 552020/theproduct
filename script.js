// EVENT LISTENER //
const items = document.querySelectorAll(".item");
const rightArrow = document.getElementsByClassName("right-arrow");
const downArrow = document.getElementsByClassName("down-arrow");

const openCloseItem = (e) => {
  const closestItem = e.target.closest(".item");
  // CLOSE AN ALREADY OPENED ITEM
  if (closestItem.classList.contains("open")) {
    for (let item of items) {
      item.classList.remove("open");
    }

    for (let i = 0; i < items.length; i++) {
      downArrow[i].classList.remove("show");
      rightArrow[i].classList.add("show");
    }

    return;
  }
  // OPEN THE SELECTED ITEM
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("open");
    downArrow[i].classList.remove("show");
    rightArrow[i].classList.add("show");
  }
  closestItem.classList.add("open");

  closestItem.getElementsByClassName("down-arrow")[0].classList.add("show");

  closestItem.getElementsByClassName("right-arrow")[0].classList.remove("show");
};

items.forEach((el) => {
  el.addEventListener("click", openCloseItem);
});

// TABBED FEATURE COMPONENT

("use strict");

// Selecting the relevant elements
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Adding Event handlers

// Bad practice Jonas says cause it scales bad.
// tabs.forEach(tab =>
//   tab.addEventListener('click', () => {
//     console.log('TAB');
//   })
// );

// A 'better version' with event delegation
// 1. We attach the event-handler to the common parent of the elements.

tabsContainer.addEventListener("click", function (e) {
  // matching strategy + problem of the span element inside the button
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return; // guard clause
  // clicked?.classList.add('operations__tab--active'); // an user suggested

  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  document;
  tabsContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");

  if (clicked.dataset.tab === "1")
    document.querySelector(".operations").style.backgroundColor = "#ebfbee";

  if (clicked.dataset.tab === "2")
    document.querySelector(".operations").style.backgroundColor = "#e3fafc";

  if (clicked.dataset.tab === "3")
    document.querySelector(".operations").style.backgroundColor = "#fff0f6";
});
