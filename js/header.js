window.onscroll = function () {
  headerChange();
  scrollBtn();
}

let header = document.querySelector('header');
//header
  function headerChange(){
  let headerT = header.offsetTop;
  let headerH = header.offsetHeight;
  //   if ( headerT >= 75 )
  if ( document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
    header.classList.remove("scroll-header");
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}


//햄버거 메뉴
let navbar_menu = document.querySelector('nav>ul');
let mobile_menu = document.querySelector('.mobile_menu');
let scrollHidden = 0;


mobile_menu.addEventListener('click', ()=>{
  navbar_menu.classList.toggle('nav_active');
  mobile_menu.classList.toggle('line_active');
 
  if(scrollHidden == 0){
    document.body.style.overflow = "hidden";
    scrollHidden = 1;
  } else{
    document.body.style.overflow = "visible";
    scrollHidden = 0;
  }

});



//nav 색 변경, 메뉴바 언더라인
let navA = document.querySelectorAll('nav>ul>li>a');
let horizontalBar = document.getElementById("horizontal-underline");

function horizontalIndicator(e){
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}
function horizontalIndicator2(e){
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = "0px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

navA.forEach((menu)=>
  menu.addEventListener("mouseenter",(e)=>

  horizontalIndicator(e.currentTarget))
);
navA.forEach((menu)=>
  menu.addEventListener("mouseleave",(e)=>
  horizontalIndicator2(e.currentTarget))
);



//top 버튼
let topBtn =  document.querySelector('#topBtn');
function scrollBtn(){
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    topBtn.classList.add('topbtnactive');
  } else{ 
    topBtn.classList.remove('topbtnactive')
  }
}

topBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({ top:0, behavior:'smooth'});
})