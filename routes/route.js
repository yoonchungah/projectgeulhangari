const express = require('express');
const router =  express.Router();
const multer  = require('multer');
const fs = require('fs');
const path = require('path');
const db = require('./../db.js');
const { json } = require('express');


//메인페이지
router.get('/', (req, res) => {
  res.render('main'); 
});


//서브 브랜드 페이지
router.get('/about',(req, res) => {
  res.render('about'); 
});

//올 북 페이지
router.get('/all_books',(req, res) => {
  res.render('all_books'); 
});

//뉴 북 페이지
router.get('/new_books',(req, res) => {
  res.render('new_books'); 
});

//북 뷰어 페이지
router.get('/book_view',(req, res) => {
  res.render('book_view'); 
});

//에디터 노트 페이지
router.get('/editer_note',(req, res) => {
  res.render('editer_note'); 
});

//로그인페이지
router.get('/login', (req, res) => {
  res.render('login');
});

//로그인페이지 연결
router.post('/writelogin',(req, res) => {
  let param1 = JSON.parse(JSON.stringify(req.body));
  let user_id = param1['user_id'];
  let user_pw = param1['user_pw'];
  db.logincheck(user_id,user_pw,(results)=>{
    if(results.length>0){
      res.send(`<script>alert("${user_id}님 안녕하세요!"); document.location.href="/"</script>`);
    } else{
      res.send(`<script>alert("로그인 정보를 확인하세요"); document.location.href="/login"</script>`)
    }
  })

});


//조인페이지
router.get('/join', (req, res) => {
  res.render('join');
});

//조인페이지 연결
router.post('/writeJoin',(req, res) => {
  let param2 = JSON.parse(JSON.stringify(req.body));
  let id = param2['id'];
  let pw = param2['pw'];
  let repw = param2['repw'];
  let name = param2['name'];
  let mail = param2['mail'];

  db.memberjoin(id,pw,name,mail,()=>{
    res.redirect('/');
  })
});






//노티스 작성 페이지
router.get('/notice_new', (req, res) => {
  res.render('notice_new');
});

//공지 작성 페이지 값 연결
router.post('/writeNotice',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let new_notice_view = param['new_notice_view'];
  let new_notice_name = param['new_notice_name'];
  let new_notice_title = param['new_notice_title'];
  let new_notice_cont = param['new_notice_cont'];
  db.insertMemo(new_notice_view,new_notice_name,new_notice_title,new_notice_cont,()=>{
    res.redirect('/notice');
  })
});

//노티스 페이지
router.get('/notice', (req, res) => {
  db.getMemo((rows)=>{
    res.render('notice',{rows:rows}); 
  })
});

//노티스 뷰어
router.get('/notice_view', (req, res) => {
  let num = req.query.num;
  db.getMemoByid(num,(row)=>{
    res.render('notice_view',{row:row[0]})
  })
});


router.post('/upNotice',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_notice_num = param['up_notice_num'];
  let up_notice_view = param['up_notice_view'];
  let up_notice_name = param['up_notice_name'];
  let up_notice_title = param['up_notice_title'];
  let up_notice_cont = param['up_notice_cont'];
  db.updateMemo(up_notice_num,up_notice_view,up_notice_name,up_notice_title,up_notice_cont,()=>{
    res.redirect('/notice');
  })
});

//뷰어에 수정버튼 추가 후 연결
router.get('/updateM',(req, res) => {
  let num = req.query.num;
  db.getMemoByid(num,(row)=>{
    res.render('notice_up',{row:row[0]})
  })
});

//뷰어에 삭제버튼 추가 후 연결
router.get('/deleteM',(req, res) => {
  let num = req.query.num;
  db.deleteByid(num,()=>{
    res.redirect('/notice')
  })
});











//faq 페이지
router.get('/faq', (req, res) => {
  db.getFaq((rows)=>{
    res.render('faq',{rows:rows}); 
  })
});

//faq 작성 페이지
router.get('/faq_new', (req, res) => {
  res.render('faq_new');
});
//게시판 작성 값 연결
router.post('/writeFaq',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let new_faq_view = param['new_faq_view'];
  let new_faq_name = param['new_faq_name'];
  let new_faq_title = param['new_faq_title'];
  let new_faq_cont = param['new_faq_cont'];
  db.insertFaq(new_faq_view,new_faq_name,new_faq_title,new_faq_cont,()=>{
    res.redirect('/faq');
  })
});

//faq 수정 페이지
router.get('/faq_up', (req, res) => {
  res.render('faq_up');
});

router.post('/upFaq',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_faq_num = param['up_faq_num'];
  let up_faq_view = param['up_faq_view'];
  let up_faq_name = param['up_faq_name'];
  let up_faq_title = param['up_faq_title'];
  let up_faq_cont = param['up_faq_cont'];

  db.updateFaq(up_faq_num,up_faq_view,up_faq_name,up_faq_title,up_faq_cont,()=>{
    res.redirect('/faq');
  })
});

//faq 뷰어에 수정버튼 추가 후 연결
router.get('/updateF',(req, res) => {
  let num = req.query.num;
  db.getFaqByid(num,(row)=>{
    res.render('faq_up',{row:row[0]})
  })
});

//faq 뷰어에 삭제버튼 추가 후 연결
router.get('/deleteF',(req, res) => {
  let num = req.query.num;
  db.deleteFaqByid(num,()=>{
    res.redirect('/faq')
  })
});


//qna 페이지
router.get('/qna', (req, res) => {
  db.getQna((rows)=>{
    res.render('qna',{rows:rows}); 
  })
});

//qna 작성 페이지
router.get('/qna_new', (req, res) => {
  res.render('qna_new');
});
//게시판 작성 값 연결
router.post('/writeQna',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let new_qna_view = param['new_qna_view'];
  let new_qna_name = param['new_qna_name'];
  let new_qna_title = param['new_qna_title'];
  let new_qna_cont = param['new_qna_cont'];
  db.insertQna(new_qna_view,new_qna_name,new_qna_title,new_qna_cont,()=>{
    res.redirect('/qna');
  })
});

//qna 수정 페이지
router.get('/qna_up', (req, res) => {
  res.render('qna_up');
});

router.post('/upQaq',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_qna_num = param['up_qna_num'];
  let up_qna_view = param['up_qna_view'];
  let up_qna_name = param['up_qna_name'];
  let up_qna_title = param['up_qna_title'];
  let up_qna_cont = param['up_qna_cont'];

  db.updateQna(up_qna_num,up_qna_view,up_qna_name,up_qna_title,up_qna_cont,()=>{
    res.redirect('/qna');
  })
});

//qna 뷰어에 수정버튼 추가 후 연결
router.get('/updateQ',(req, res) => {
  let num = req.query.num;
  db.getQnaByid(num,(row)=>{
    res.render('qna_up',{row:row[0]})
  })
});

//qna 뷰어에 삭제버튼 추가 후 연결
router.get('/deleteQ',(req, res) => {
  let num = req.query.num;
  db.deleteQnaByid(num,()=>{
    res.redirect('/qna')
  })
});


//절대 지우면 안됨
module.exports = router;