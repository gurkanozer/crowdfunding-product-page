export const run = (navbarService, modalService, rewardService, bookmarkService) => {
  //Toggle Navbar
  listenEvent("click", navbarService.toggleBtn, () => {
    navbarService.toggle();
  });
  //Open Modal
  modalService.openBtns.forEach((element) => {
    listenEvent("click", element, () => {
      modalService.open(element);
    });
  });
  //Close Modal
  modalService.closeBtns.forEach((element)=>{
    listenEvent("click", element,()=>{
      modalService.close();
    });
  });
  //Form Action
  rewardService.forms.forEach((element)=>{
    listenEvent("submit",element,(e)=>{
      e.preventDefault();
      let res = rewardService.getReward(element);
      if(res){
        console.log(res)
        modalService.openSuccess();
      }
      else{
        console.log("Wraning!");
        //clear inputs...
      }    
    });
  });
  //Overlay Action
  [modalService.modal, navbarService.navbar].forEach(element =>{
    listenEvent("click",element,(e)=>{
      if(e.target.classList.contains("modal"))
        modalService.close();
      else if(e.target.classList.contains("navbar")){
        navbarService.toggle();
      }
      });
  });
  //Screen Resize, Clear Overlay
  listenEvent("resize",window,()=>{
    let width = window.innerWidth;
    if(width >= 768 && !modalService.modal.classList.contains("active") && navbarService.navbar.classList.contains("active")){
      navbarService.toggle();
    }
  });
  //Radio Button Action, Set Selected Reward
  rewardService.radioBtns.forEach((element)=>{
    listenEvent("click",element,()=>{
      rewardService.setActiveReward(element);
    })
  })
  //Bookmark Action
  listenEvent("click",bookmarkService.toggleBtn,()=>{
    bookmarkService.toggleBookmark();
  })
};

const listenEvent = (action, el, fun) => {
  el.addEventListener(action, fun);
};
