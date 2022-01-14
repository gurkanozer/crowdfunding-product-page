class ModalService {
  constructor(modal, modalOpenBtns, modalCloseBtnSs,body,overlay,cards) {
    this.modal = modal;
    this.openBtns = modalOpenBtns;
    this.closeBtns = modalCloseBtnSs;
    this.body = body;
    this.overlay = overlay;
    this.cards = cards;
  }
  open(e) {
    this.toggle();
    this.clearSelectedReward();
    let reward = document.getElementById(e.dataset.reward);
    let radioBtn = reward.querySelector(".card__radio-btn");
    reward.classList.add("selected");
    radioBtn.classList.add("active");
    this.setRewardValues(reward);
    reward.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
  }
  close() {
    this.toggle();
    this.clearSelectedReward();
    this.setDefaultModal();
  }

  toggle(){
    this.modal.classList.toggle("active");
    let modalRewards = this.modal.querySelector(".modal--rewards");
    modalRewards.classList.toggle("active");
    let modalStatus = this.modal.classList.contains("active");
    if (modalStatus === true) {
      this.body.classList.add("overlay--active");
      this.overlay.classList.add("active");
    } else {
      this.body.classList.remove("overlay--active");
      this.overlay.classList.remove("active");
    }
  }
  clearSelectedReward(){
    this.cards.forEach(element => {
        element.classList.remove("selected");
        let radioBtn = element.querySelector(".card__radio-btn");
        radioBtn.classList.remove("active");
    });
  }
  setDefaultModal(){
      let modalRewards = this.modal.querySelector(".modal--rewards");
      let modalSuccess = this.modal.querySelector(".modal--success"); 
      modalRewards.classList.remove("active");
      modalSuccess.classList.remove("active");
  }
  setRewardValues(reward){
    let input = reward.querySelector('input[name="pledge"]');
    input.value = input.dataset.min;
  }
  openSuccess(){
    let modalRewards = this.modal.querySelector(".modal--rewards");
    let modalSuccess = this.modal.querySelector(".modal--success"); 
    modalRewards.classList.remove("active");
    modalSuccess.classList.add("active");
    modalSuccess.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
  }
}

export default ModalService;
