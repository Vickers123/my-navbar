// show menu
const navMenu = document.getElementById("nav-menu");
const navToogle = document.getElementById("nav-toogle");
const navClose = document.getElementById("nav-close");

console.log("jjdj");
// menu show
navToogle.addEventListener("click", ()=>{
    navMenu.classList.add("show-menu");
})

// hide menu
navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu");
})

// search
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')
 
// search show    
searchBtn.addEventListener('click' , () => {
    search.classList.add('show-search')
})  

// search close
search.addEventListener('click' , () => {
    search.classList.add('show-search')
})  
