let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
let headerTwo=document.querySelector(".header-2");
let navSearch=document.querySelector(".searchbar-nav")



menu.addEventListener('click', () => {
    // console.log("working");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("show-menu");

    

});
window.onscroll=()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("show-menu");
    navSearch.classList.remove("unhide-searchbar")

    


    if(window.scrollY>100){
        console.log("working")
        headerTwo.classList.add("show-menu")
        navSearch.classList.add("unhide-searchbar")
        
        

    }else{
        headerTwo.classList.remove("show-menu")
        navSearch.classList.remove("unhide-searchbar")
    }

} 