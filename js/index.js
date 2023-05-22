const modalBtns = document.querySelectorAll(".modal-open");
const modals = document.querySelectorAll(".modal");

const body = document.body;

function openModal(elem) {
  elem.classList.add("active");
  body.classList.add("locked");
}

function closeModal(e) {
  if (
    e.target.classList.contains("content-modal__menulogo") ||
    e.target.closest(".content-modal__menulogo") ||
    e.target.classList.contains("modal__bg")
  ) {
    e.target.closest(".modal").classList.remove("active");
    body.classList.remove("locked");
  }
}

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modalOpen;

    modals.forEach((modal) => {
      if (
        modal.dataset.modal == data ||
        modal.dataset.modal == e.target.closest(".modal-open").dataset.modalOpen
      ) {
        openModal(modal);
      }
    });
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => closeModal(e));
});

window.addEventListener("keydown", (e) => {
  modals.forEach((modal) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      body.classList.remove("locked");
    }
  });
});

// Модальное окно

const tabsTitle = document.querySelectorAll(".items-modal__title");
const tabsContent = document.querySelectorAll(".items-modal__content");

tabsTitle.forEach((item) =>
  item.addEventListener("click", (event) => {
    const tabsTitleTarget = event.target.getAttribute("data-tab");

    tabsTitle.forEach((element) => element.classList.remove("active-tab"));

    tabsContent.forEach((element) =>
      element.classList.add("items-modal__hidden-content")
    );

    item.classList.add("active-tab");

    document
      .getElementById(tabsTitleTarget)
      .classList.remove("items-modal__hidden-content");
  })
);

document.querySelector("[data-tab='tab1']").classList.add("active-tab");
document.querySelector("#tab1").classList.remove("items-modal__hidden-content");

// Табы

const menuBtn = document.querySelector(".content-modal__logo");
const openMenu = document.querySelector(".content-modal__nav");
const lockedMenu = document.querySelector(".modal__body");

menuBtn.addEventListener("click", () => {
  openMenu.classList.toggle("active-button");
  lockedMenu.classList.toggle("locked-menu");
});

// Гамбургер меню

const swiper = new Swiper(".roadmap__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 3,
    },

    1250: {
      slidesPerView: 2,
    },

    450: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },
});

// Слайдер
