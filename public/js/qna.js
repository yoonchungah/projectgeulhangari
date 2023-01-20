
let qnaList = document.getElementsByClassName('qna_list');


for(i = 0; i < qnaList.length; i++){
  qnaList[i].addEventListener('click',function(){
    this.classList.toggle('qna_list_active');
    let next = this.nextElementSibling;
      if(next.style.maxHeight){
        next.style.maxHeight = null;
        next.style.padding = null;
      } else{
        let qnaLists = document.querySelectorAll('.qna_list.qna_list_active');
        for(j=0; j < qnaLists.length; j++){
          qnaLists[j].classList.remove('qna_list_active');
          qnaLists[j].nextElementSibling.style.maxHeight = null;
          qnaLists[j].nextElementSibling.style.padding = null;
        }
        this.classList.add('qna_list_active');
        next.style.maxHeight = '1200px';
        next.style.padding = '30px 0';
      }
  });
}
