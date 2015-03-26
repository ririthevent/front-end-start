    var max = (todayPhoto.length + 1) / 3;
    var current = 0;
    max = parseInt(max);

    var beforeBtn = document.getElementById('beforeBtn');
    var nextBtn = document.getElementById('nextBtn');
    var template = document.getElementById('photoTemplate').innerHTML;
    var wrap = document.getElementById('wrap');
    var str = '';
    for(var i=0; i<=2; i++){
        str += tmpl(template, {photo :  todayPhoto[i]});
    }
    wrap.innerHTML = str;




    beforeBtn.addEventListener("click", beforeBtnClick);
    nextBtn.addEventListener("click", nextBtnClick);
