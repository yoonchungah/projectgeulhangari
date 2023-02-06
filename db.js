var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.cbt0ajlvu182.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : '12345eri',
  database : 'geul',
  dateStrings : 'date',
});


connection.connect(function(err){
  if (err) throw err;
  console.log("connected!")
})


//회원가입
function memberjoin(id,pw,name,mail,callback){
  connection.query(`INSERT INTO joins(id,pw,name,mail) VALUES ('${id}','${pw}','${name}','${mail}')`,(err)=>{
    if (err) throw err;
    callback();
  })
}
//로그인
function logincheck(user_id,user_pw,callback){
  connection.query(`SELECT * FROM joins WHERE id = '${user_id}' AND pw = '${user_pw}'`,(err,results)=>{
    if (err) throw err;
    callback(results);
  })
}


//FAQ
function getFaq(callback){
  connection.query('SELECT * FROM faqs ORDER BY num desc',(err,rows)=>{
    if (err) throw err;
    callback(rows);
  })
}

//FAQ입력
function insertFaq(new_faq_view,new_faq_name,new_faq_title,new_faq_cont,callback){
  connection.query(`INSERT INTO faqs(create_time,view,wirte,title,cont) VALUES 
  (NOW(),'${new_faq_view}','${new_faq_name}','${new_faq_title}','${new_faq_cont}')`,(err) => {
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 테이블만 추출
function getFaqByid(num, callback){
  connection.query(`SELECT * FROM faqs WHERE num = ${num}`, (err,row)=>{
    if (err) throw err;
    callback(row);
  })
}

//프라이머리키 일치하는 부분 수정
function updateFaq(up_faq_num,up_faq_view,up_faq_name,up_faq_title,up_faq_cont,callback){
  connection.query(`UPDATE faqs SET create_time= now(),view='${up_faq_view}',wirte='${up_faq_name}',title='${up_faq_title}',cont='${up_faq_cont}' WHERE num =${up_faq_num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 부분 삭제
function deleteFaqByid(num,callback){
  connection.query(`DELETE FROM faqs WHERE num=${num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}



//QNA
function getQna(callback){
  connection.query('SELECT * FROM qnas ORDER BY num desc',(err,rows)=>{
    if (err) throw err;
    callback(rows);
  })
}

//QNA입력
function insertQna(new_qna_view,new_qna_name,new_qna_title,new_qna_cont,callback){
  connection.query(`INSERT INTO qnas(create_time,view,wirte,title,cont) VALUES 
  (NOW(),'${new_qna_view}','${new_qna_name}','${new_qna_title}','${new_qna_cont}')`,(err) => {
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 테이블만 추출
function getQnaByid(num, callback){
  connection.query(`SELECT * FROM qnas WHERE num = ${num}`, (err,row)=>{
    if (err) throw err;
    callback(row);
  })
}

//프라이머리키 일치하는 부분 수정
function updateQna(up_qna_num,up_qna_view,up_qna_name,up_qna_title,up_qna_cont,callback){
  connection.query(`UPDATE qnas SET create_time= now(),view='${up_qna_view}',wirte='${up_qna_name}',title='${up_qna_title}',cont='${up_qna_cont}' WHERE num =${up_qna_num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 부분 삭제
function deleteQnaByid(num,callback){
  connection.query(`DELETE FROM qnas WHERE num=${num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}


//notice 테이블 추출
function getMemo(callback){
  connection.query('SELECT * FROM memos ORDER BY num desc',(err,rows)=>{
    if (err) throw err;
    callback(rows);
  })
}

//notice db테이블 입력
function insertMemo(new_notice_view,new_notice_name,new_notice_title,new_notice_cont,callback){
  connection.query(`INSERT INTO memos(create_time,view,wirte,title,cont) VALUES 
  (NOW(),'${new_notice_view}','${new_notice_name}','${new_notice_title}','${new_notice_cont}')`,(err) => {
    if (err) throw err;
    callback();
  })
}

//notice 프라이머리키 일치하는 테이블만 추출
function getMemoByid(num, callback){
  connection.query(`SELECT * FROM memos WHERE num = ${num}`, (err,row)=>{
    if (err) throw err;
    callback(row);
  })
}

//notice 프라이머리키 일치하는 부분 수정
function updateMemo(up_notice_num,up_notice_view,up_notice_name,up_notice_title,up_notice_cont,callback){
  connection.query(`UPDATE memos SET create_time= now(),view='${up_notice_view}',wirte='${up_notice_name}',title='${up_notice_title}',cont='${up_notice_cont}' WHERE num =${up_notice_num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 부분 삭제
function deleteByid(num,callback){
  connection.query(`DELETE FROM memos WHERE num=${num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}


module.exports = {
  memberjoin,logincheck,
  getFaq,insertFaq,getFaqByid,updateFaq,deleteFaqByid,
  getQna,insertQna,getQnaByid,updateQna,deleteQnaByid,
  getMemo,insertMemo,getMemoByid,updateMemo,deleteByid,
  
}
