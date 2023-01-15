//버튼2를 누르면

document.querySelector('.btn_1').addEventListener('click',()=>{
  document.querySelector('.container').style.transform =
  'translate(0vw)';
 })
 document.querySelector('.btn_2').addEventListener('click',()=>{
  document.querySelector('.container').style.transform =
  'translate(-100vw)';
 })
  document.querySelector('.btn_3').addEventListener('click',()=>{
  document.querySelector('.container').style.transform =
  'translate(-200vw)';
 })