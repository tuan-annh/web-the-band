const BAR_BTN = document.querySelector(".icon-search span");
const Hien_thi = document.querySelector(".bar-btn-mobile");
const NUT_CHON = document.querySelectorAll(".bar-btn a");
const MAIN = document.querySelector(".main");
const HERO = document.querySelector(".hero");
BAR_BTN.addEventListener("click", (e) => {
  Hien_thi.classList.toggle("d-block");
});
MAIN.addEventListener("click", (e) => {
  Hien_thi.classList.remove("d-block");
});
HERO.addEventListener("click", (e) => {
  e.stopPropagation();
});
NUT_CHON.forEach((i) => {
  i.addEventListener("click", (e) => {
    Hien_thi.classList.remove("d-block");
  });
});

const btn_ticket_x = document.querySelector(".btn-ticket-x i");
const MODAL = document.querySelector(".modal");
const buy_ticket_btn = document.querySelectorAll(".tour-section button");
const btn_close = document.querySelector(".footer-tickets button");
const tickets_form = document.querySelector(".tickets-form");
buy_ticket_btn.forEach((i) => {
  i.addEventListener("click", (e) => {
    MODAL.classList.add("d-flex");
  });
});
btn_ticket_x.addEventListener("click", (e) => {
  MODAL.classList.remove("d-flex");
});
btn_close.addEventListener("click", (e) => {
  MODAL.classList.remove("d-flex");
});
MODAL.addEventListener("click", (e) => {
  MODAL.classList.remove("d-flex");
});
tickets_form.addEventListener("click", (e) => {
  e.stopPropagation();
});
