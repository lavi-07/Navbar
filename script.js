const menubar = document.querySelector(".menubar");      
const menu = document.getElementsByClassName("menu-logo")[0]; 
const category = document.querySelector(".dropdown")
const items = document.getElementsByClassName("category")[0];
const menus = document.querySelectorAll(".menubar, .category")
value1 = true;
value2 = true
menu.addEventListener("click", (e) => {
    e.stopPropagation()
    if(value1){
        menubar.style.display = "block"
        value1 = false
    }else{
        menubar.style.display = "none" 
        items.style.display = "none"
        value1 = true
        value2 = true
    }
});
category.addEventListener("click", () => {
    if(value2){
        items.style.display = "block"
        value2 = false
    }else{
        items.style.display = "none"
        value2= true
    }
});
menus.forEach((menu)=>{
    menu.addEventListener("click",(e)=>{
        e.stopPropagation()
    })
})
document.addEventListener("click",()=>{
    if(menubar.style.display === "block" || items.style.display === "block"){
        menubar.style.display = "none" 
        items.style.display = "none"
        value1 = true
        value2 = true
    }
})