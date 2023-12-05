const header = document.querySelector("header");

Window.addEventListener ("Scroll", function(){
    header.classList.toggle ("sticky", this.Window.scrollY > 0);
})