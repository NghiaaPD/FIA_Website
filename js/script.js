// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Alert Wifi

const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');

  if(scrollY > 250){
    scrollUpBtn.classList.add("scrollUpBtn-active");
  }else{
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
  
  
  // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section =>{
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

          let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
          if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
            navId.classList.add("active-navlink");           
          }else{
            navId.classList.remove("active-navlink");     
          }
          
          navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
          })
  })
})  
  
  
  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  
  sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})

sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})

// Alert Wifi
let alerts = document.querySelectorAll('.alert');
alerts.forEach(item=>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('close')){
            item.style.display = 'none';
        }
    })
})

window.addEventListener('offline', function(){
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'grid';
})

window.addEventListener('online', function(){
  document.getElementById('error').style.display = 'none';
  document.getElementById('success').style.display ='grid';
});

// Context menu
const copyItem = document.querySelector("#copy");
copyItem.addEventListener("click", function(e) {
    e.preventDefault();
    navigator.clipboard.writeText("The text to be copied").then(() => {
        console.log('Text copied to clipboard');
    }, (err) => {
        console.error('Failed to copy text: ', err);
    });
    hideContextMenu();
});//cho phép thanh menu hiện thị ở bất cứ đâu


const contextmenu = document.querySelector(".contextmenu");
let ctxPosition = {
    pageX: 0,
    pageY: 0
};
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const ctxHeight = contextmenu.offsetHeight;
    const ctxWidth = contextmenu.offsetWidth + 5;
    const copyItem = document.querySelector("#copy");
    const widthOverflow = e.pageX + ctxWidth > window.innerWidth;
    const heightOverflow = e.pageY + ctxHeight > window.innerHeight;

    ctxPosition = {
        pageX: widthOverflow ? e.pageX - ctxWidth - 5 : e.pageX,
        pageY: heightOverflow ? e.pageY - ctxHeight : e.pageY
    };

    hideContextMenu();
    setTimeout(showCtxMenu, 50);
});

document.addEventListener("click", hideContextMenu);

copyItem.addEventListener("click", function(e) {
  e.preventDefault();
  navigator.clipboard.writeText(window.getSelection().toString())
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch((err) => {
        console.error(`Failed to copy text: ${err}`);
    });
});

function showCtxMenu() {
    contextmenu.style.cssText = `
    opacity: 1;
    transform: scale(1);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}

function hideContextMenu() {
    contextmenu.style.cssText = `
    opacity: 0;
    transform: scale(0);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}// tính năng copy

const refreshItem = document.querySelector("#refresh");
refreshItem.addEventListener("click", function(e) {
  e.preventDefault();
  location.reload();
});//Tính năng refresh

const pasteItem = document.querySelector("#paste");
pasteItem.addEventListener("click", function(e) {
  e.preventDefault();
  navigator.clipboard.readText().then(text => {
    console.log(text);
  });
});//tính năng paste

const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");

zoomIn.addEventListener("click", function(e) {
  e.preventDefault();
  document.body.style.zoom = "120%";
});

zoomOut.addEventListener("click", function(e) {
  e.preventDefault();
  document.body.style.zoom = "100%";
});//tính năng zoom vào và ra

document.getElementById("close").addEventListener("click", function(e) {
  e.preventDefault();
  window.close();
});
// tính năng đóng web



