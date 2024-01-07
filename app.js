
console.log("hi");
let searchIcon = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-form");
let sideMenu = document.querySelector(".side-menu");
let navbar = document.querySelector(".togglenav");
let html  = document.querySelector("html");
let cards = document.querySelectorAll(".cards");
let c_img = document.querySelectorAll(".cards img");
let carts = document.querySelector(".side");
let body = document.querySelector("body");
let favbtn = document.querySelectorAll("#favbtn");
let done = document.querySelectorAll(".done");
let content = document.getElementById('content');
let hero = document.querySelector(".hero");
let d5 = document.querySelector(".hero .display-5");
let happy = document.querySelector(".hero .happy");

    function show() {
        searchBar.classList.toggle('show-search');
      }
    

    function sideBar(){
        sideMenu.style.display = "block";
        hero.style.backgroundColor = '#1c1c1c';
        d5.style.color = '#414040';
        happy.style.color = '#414040';
        hero.style.pointerEvents = 'none';
        console.log(false);
        sideMenu.style.right = "0%";
        html.style.overflowY ="hidden";
        html.style.overflowX ="hidden";
        sideMenu.style.marginRight = "0";
    }
    function closed(){
        hero.style.backgroundColor = '#444444';
        d5.style.color = 'white';
        happy.style.color = 'white';
        hero.style.pointerEvents = 'auto';
        sideMenu.style.display = "none";
        html.style.overflowY ="auto";
    }

    function cart(){
        carts.style.display = "block";
        hero.style.backgroundColor = '#1c1c1c';
        d5.style.color = '#414040';
        happy.style.color = '#414040';
        hero.style.pointerEvents = 'none';
        console.log(false);
        sideMenu.style.right = "0%";
        html.style.overflowY ="hidden";
        html.style.overflowX ="hidden";
        sideMenu.style.marginRight = "0";
    }
    function closed1(){
        hero.style.backgroundColor = '#444444';
        d5.style.color = 'white';
        happy.style.color = 'white';
        hero.style.pointerEvents = 'auto';
        carts.style.display = "none";
        html.style.overflowY ="auto";
    }

    favbtn.forEach(donebtn => {
        donebtn.addEventListener('click', ()=>{
            console.log('wow');
            done.forEach(donehtml => {
                donehtml.style.opacity = 1;
                donehtml.innerHTML = ' you made it!';
                donebtn.style.color = 'black';
                donebtn.style.backgroundColor = 'white';
            });
        })
    });
// window.addEventListener('load', ()=>{
//     let bgimg= document.querySelector(".bgimg");
//     bgimg.classList.add("transition");
// })