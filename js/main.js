//섹션1 스와이퍼
var swiper = new Swiper(".sec1banner", {
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});

// 섹션3 탭메뉴
function booksTab1(){
  document.querySelector('.tab_cont_wrap1').style.display = 'flex';
  document.querySelector('.tab_cont_wrap2').style.display = 'none';
  document.querySelector('.tab_cont_wrap3').style.display = 'none';
}

function booksTab2(){
  document.querySelector('.tab_cont_wrap1').style.display = 'none';
  document.querySelector('.tab_cont_wrap2').style.display = 'flex';
  document.querySelector('.tab_cont_wrap3').style.display = 'none';
}
function booksTab3(){
  document.querySelector('.tab_cont_wrap1').style.display = 'none';
  document.querySelector('.tab_cont_wrap2').style.display = 'none';
  document.querySelector('.tab_cont_wrap3').style.display = 'flex';
}

//섹션3 미디어쿼리 스와이퍼
function tabListbtn(){
  let tabBtn1 = document.querySelector('.tab_list_1_btn');
  let tabBtn2 = document.querySelector('.tab_list_2_btn');
  let tabBtn3 = document.querySelector('.tab_list_3_btn');

  if( 1100 > window.innerWidth ){
    tabBtn1.addEventListener('click',()=>{
      document.querySelector('.tab_lists').style.transform =
      'translate(0vw)';
      tabBtn1.classList.add('btn_active');
      tabBtn2.classList.remove('btn_active');
      tabBtn3.classList.remove('btn_active');
     })
    tabBtn2.addEventListener('click',()=>{
      document.querySelector('.tab_lists').style.transform =
      'translate(-100vw)';
      tabBtn1.classList.remove('btn_active');
      tabBtn2.classList.add('btn_active');
      tabBtn3.classList.remove('btn_active');
    })
    tabBtn3.addEventListener('click',()=>{
      document.querySelector('.tab_lists').style.transform =
      'translate(-200vw)';
      tabBtn1.classList.remove('btn_active');
      tabBtn2.classList.remove('btn_active');
      tabBtn3.classList.add('btn_active');
    })
  } else{
    document.querySelector('.tab_lists').style.transform =
      'translate(0vw)';
  }
}
tabListbtn()

//섹션4 마우스이벤트
let Profile = document.querySelectorAll('.author_profile');
let authorList = document.querySelectorAll('.author_list>li>a');

for(let i = 0; i<Profile.length; i++){
  authorList[i].addEventListener('mouseenter',()=>{
    Profile[i].classList.add('profile_active');
  });
  authorList[i].addEventListener('mouseleave',()=>{
  Profile[i].classList.remove('profile_active');
  });
}

//섹션5 섹션5 영역에 들어오면 박스 보였다가 안보이면 사라지게끔
let observer = new IntersectionObserver((e)=>{
  e.forEach((sec5)=>{
    if(sec5.isIntersecting){
      sec5.target.style.opacity = 1;
      sec5.target.style.left = 0;
      sec5.target.style.transition = 'all 2s';
    }else{
      sec5.target.style.opacity = 0;
      sec5.target.style.left = '-100%';
    }
  })
})

let noteWrap = document.querySelector('.note_list_wrap');
observer.observe(noteWrap);
