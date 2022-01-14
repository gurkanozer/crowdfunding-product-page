class BookmarkService{
    constructor(bookmarkBtn){
        this.toggleBtn = bookmarkBtn;
    }

    toggleBookmark(){
        this.toggleBtn.classList.toggle("active");
        if(this.toggleBtn.classList.contains("active")){
            this.toggleBtn.querySelector("span").innerHTML = "Bookmarked";
        }
        else
            this.toggleBtn.querySelector("span").innerHTML = "Bookmark";
        //do something...
    }
}

export default BookmarkService;