class RewardService{
    constructor(cards, forms, radioBtns){
        this.cards = cards;
        this.forms = forms;
        this.radioBtns = radioBtns;
    }
    getReward(e){
        let data = new FormData(e);
        let min = e.dataset.min;
        if(Number(min) > data.get("pledge")){
            //Warning!
            //do something...
            return false;
        }
        else{
            return true;
            //Success!
            //do something...
        }
    }
    setActiveReward(element){
        this.radioBtns.forEach(el=>{
            el.classList.remove("active");
        });
        element.classList.add("active");
        this.cards.forEach(el=>{
            el.classList.remove("selected");
        });
        let selectedReward = document.querySelector(`#${element.dataset.id}`);
        let input = selectedReward.querySelector("input[name='pledge']");
        if(input){
            input.value = input.dataset.min;
        }
        selectedReward.classList.add("selected");

    }
    clearInputs(){
        this.forms.forEach(element => {
            let e= element.querySelector("input[type='number']");
            e.value = null
        });
    }
}

export default RewardService;