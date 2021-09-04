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
