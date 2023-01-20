window.onscroll = function () {
  headerChange();
  dropDownmenu();
}

let header = document.querySelector('header');
//header bg color 변경
  function headerChange(){
  if ( document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
    header.classList.remove("scroll-header");
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

// 드롭다운 메뉴
let subList = document.querySelectorAll('.sub_list');
let subMenu = document.querySelectorAll('.sub_menu');

for( z = 0 ; z <subList.length; z++){      
  let subLorder = subList[z];
  let subMorder = subMenu[z];
    subLorder.addEventListener('mouseenter',()=>{
      subMorder.style.height = "140px";
    }),
    subLorder.addEventListener('mouseleave',()=>{
      subMorder.style.height = "0px";
    })
}

  function dropDownmenu(){
    for( i = 0 ; i <subList.length; i++){      
      let subMorder = subMenu[i];
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
          subMorder.classList.add("sub-menu-bgcolor");
        } else {
          subMorder.classList.remove("sub-menu-bgcolor");
        }  
     
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