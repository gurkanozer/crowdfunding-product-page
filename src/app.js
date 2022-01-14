import "./style/main.css";
import { run } from "./js/run";
import NavbarService from "./js/nabar.services";
import ModalService from "./js/modal.services";
import RewardService from "./js/reward.services";
import BookmarkService from "./js/bookmark.services";

//ELEMENTS
const navbar = document.querySelector(".navbar");
const navbarToggleBtn = document.querySelector(".header__toggle-btn");
const body = document.body;
const overlay = document.querySelector(".overlay");
const bookmarkBtn = document.querySelector(".bookmark__btn-bookmark");
const modal = document.querySelector(".modal");
const modalCloseBtns = document.querySelectorAll(".modal__close");
const modalOpenBtns = document.querySelectorAll(".modal__open");
const cards = document.querySelectorAll(".card");
const forms = document.querySelectorAll("form");
const cardRadioBtns = document.querySelectorAll(".card__radio-btn");
//SERBICES
const navbarService = new NavbarService(navbarToggleBtn, navbar, body, overlay);
const modalService = new ModalService(
  modal,
  modalOpenBtns,
  modalCloseBtns,
  body,
  overlay,
  cards
);
const rewardService = new RewardService(cards, forms, cardRadioBtns);
const bookmarkService = new BookmarkService(bookmarkBtn);
run(navbarService, modalService, rewardService,bookmarkService);
