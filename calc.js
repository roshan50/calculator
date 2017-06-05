var operator;
var memory = 0;
var number;
var current;
var flag = false;

function addDigit(btn){
  if(document.querySelector(".labels--show").innerHTML == 0 || flag == false){
    document.querySelector(".labels--show").innerHTML = btn.innerHTML;
    number = btn.innerHTML;
  }else {
    document.querySelector(".labels--show").innerHTML += btn.innerHTML;
    number += btn.innerHTML;
  }
  flag = true;
}

function addOperator(btn){
  if(flag == false)
    alert('error!');
  else {
      current = number;
      if(memory == 0){
        memory = number;
      }else{
        memory = calculate();
        current = memory;
      }
      operator = btn.innerHTML;
      document.querySelector(".labels--memory").innerHTML += number + btn.innerHTML;
      document.querySelector(".labels--show").innerHTML = current;
      flag = false;
      number = 0;
  }
}

function eval(){
  calculate();
  document.querySelector(".labels--show").innerHTML = res;
  document.querySelector(".labels--memory").innerHTML = '';
  flag = false;
}

function calculate(){
  a = parseInt(memory);
  b = parseInt(number);
  switch(operator) {
    case '+':
        res = a+b;
        break;
    case '-':
        res = a-b;
        break;
    case '*':
        res = a*b;
        break;
    case '/':
        res = a/b;
        break;
    default:
        alert('not defined!');
    }
    // alert(res);
    return res;
}

function clear1(){
  operator = null;
  memory = 0;
  number = null;
  current = null;
  flag = false;
  document.querySelector(".labels--show").innerHTML = 0;
  document.querySelector(".labels--memory").innerHTML = '';
}
