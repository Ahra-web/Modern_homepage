window.onload = function(){
    popup();
    navbar();
}

function popup(){
    document.querySelector(".popup-btn").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}

function navbar(){
    let navList = document.querySelectorAll(".nav > ul > li");
    
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "180px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}