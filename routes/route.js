const express = require('express');
const router =  express.Router();
const path = require('path');
const html = `<!doctype html>
  <html>
  <head>
  <title>node HTML</title>
  </head>
  <body>
  <h1>hello</h1>
  <form action='/name' method='POST'>
  <input type='text' name='name' placeholder='이름 작성하기'>
  <button>확인</button>
  </form>
  </body>
  </html>
`
//포트 넘버 입력했을때 main 페이지가 바로 보이게 할 수 있다
router.get('/', (req, res) => {
  //페이지를 불러올 때 쓰는 것 render
  res.render('main'); 
});

//--------페이지 연결 시작---------

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

//로그인페이지
router.get('/login', (req, res) => {
  res.render('login');
});

//콘솔 로그로 값 받기
router.post('/writelogin',(req, res) => {
  let param1 = JSON.parse(JSON.stringify(req.body));
  let user_id = param1['user_id'];
  let user_pw = param1['user_pw'];

  console.log(user_id);
  console.log(user_pw);
});


//조인페이지
router.get('/join', (req, res) => {
  res.render('join');
});
router.post('/writeJoin',(req, res) => {
  let param2 = JSON.parse(JSON.stringify(req.body));
  let id = param2['id'];
  let pw = param2['pw'];
  let repw = param2['repw'];
  let name = param2['name'];
  let mail = param2['mail'];

  console.log(id);
  console.log(pw);
  console.log(repw);
  console.log(name);
  console.log(mail);
});


//노티스 페이지
router.get('/notice', (req, res) => {
  res.render('notice');
});

//노티스 뷰어
router.get('/notice_view', (req, res) => {
  res.render('notice_view');
});

//노티스 작성 페이지
router.get('/notice_new', (req, res) => {
  res.render('notice_new');
});
//노티스 수정 페이지
router.get('/notice_up', (req, res) => {
  res.render('notice_up');
});

router.post('/upNotice',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_notice_day = param['up_notice_day'];
  let up_notice_view = param['up_notice_view'];
  let up_notice_name = param['up_notice_name'];
  let up_notice_title = param['up_notice_title'];
  let up_notice_cont = param['up_notice_cont'];
  console.log(up_notice_day);
  console.log(up_notice_view);
  console.log(up_notice_name);
  console.log(up_notice_title);
  console.log(up_notice_cont);

  //내가 원하는 페이지로 보내는 역할
  res.render('notice_view.ejs',{'upNotice' : param})
});



//faq 페이지
router.get('/faq', (req, res) => {
  res.render('faq');
});

//faq 작성 페이지
router.get('/faq_new', (req, res) => {
  res.render('faq_new');
});

//faq 수정 페이지
router.get('/faq_up', (req, res) => {
  res.render('faq_up');
});

router.post('/upFaq',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_faq_day = param['up_faq_day'];
  let up_faq_view = param['up_faq_view'];
  let up_faq_name = param['up_faq_name'];
  let up_faq_title = param['up_faq_title'];
  let up_faq_cont = param['up_faq_cont'];
  console.log(up_faq_day);
  console.log(up_faq_view);
  console.log(up_faq_name);
  console.log(up_faq_title);
  console.log(up_faq_cont);

  //내가 원하는 페이지로 보내는 역할
  res.render('faq.ejs',{'upFaq' : param})
});


//qna 페이지
router.get('/qna', (req, res) => {
  res.render('qna');
});

//qna 작성 페이지
router.get('/qna_new', (req, res) => {
  res.render('qna_new');
});

//qna 수정 페이지
router.get('/qna_up', (req, res) => {
  res.render('qna_up');
});

router.post('/upQaq',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let up_qna_day = param['up_qna_day'];
  let up_qna_view = param['up_qna_view'];
  let up_qna_name = param['up_qna_name'];
  let up_qna_title = param['up_qna_title'];
  let up_qna_cont = param['up_qna_cont'];
  console.log(up_qna_day);
  console.log(up_qna_view);
  console.log(up_qna_name);
  console.log(up_qna_title);
  console.log(up_qna_cont);

  //내가 원하는 페이지로 보내는 역할
  res.render('qna.ejs',{'upQaq' : param})
});


//절대 지우면 안됨
module.exports = router;