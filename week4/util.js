function beforeBtnClick(event){
  current = current - 1;
  if(current <= 0) {
    current = 0;
    return ;
  }
  else current = current - 1;
  var str = '';
  wrap.innerHTML = '';
  for(var i=current*3; i<=current*3+2; i++){
    str += tmpl(template, {photo :  todayPhoto[i]});
  }
  wrap.innerHTML = str;
}

function nextBtnClick(event) {
    current = current + 1;
  if(current >= max) {
    current = max;
    return ;
  }

  var str = '';
  wrap.innerHTML = '';
  for(var i=current*3; (i<=current*3+2)&&(i<todayPhoto.length); i++){
    str += tmpl(template, {photo :  todayPhoto[i]});
  }
  wrap.innerHTML = str;
}
