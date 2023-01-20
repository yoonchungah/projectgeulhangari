
let faqList = document.getElementsByClassName('faq_list');


for(i = 0; i < faqList.length; i++){
  faqList[i].addEventListener('click',function(){
    this.classList.toggle('faq_list_active');
    let next = this.nextElementSibling;
      if(next.style.maxHeight){
        next.style.maxHeight = null;
        next.style.padding = null;
      } else{
        let faqLists = document.querySelectorAll('.faq_list.faq_list_active');
        for(j=0; j < faqLists.length; j++){
          faqLists[j].classList.remove('faq_list_active');
          faqLists[j].nextElementSibling.style.maxHeight = null;
          faqLists[j].nextElementSibling.style.padding = null;
        }
        this.classList.add('faq_list_active');
        next.style.maxHeight = '1200px';
        next.style.padding = '30px 0';
      }
  });
}
