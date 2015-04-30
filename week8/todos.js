//start...

//개발자도구에서 메세지확인
//console.log('todos.js');



// id가 todoString 인 element 가져오기
(function($, global){
var $todoStringField = $('#todoString');
var todoTemplateHtml = $('#todoTemplate').html();
var $listDom = $('#todoList');

$todoStringField.on('keyup', addTodo);

$listDom.on('click', '.delete', checkDelete( $listDom.html() ));

$listDom.html(loadData());

})(jQuery, window);

//console.log($todoStringField);


//todoStringField.addEventListener('keyup', addTodo);

//삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
//listDom.addEventListener('click', checkDelete);

//처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
//listDom.innerHTML = loadData();
