/*falta estructura*/

function suma()
{
  var num1=Number(document.getElementById('n1').value);
  var num2=Number(document.getElementById('n2').value);
  var res1=num1+num2;
  document.getElementById('res1').value=res1;

}

function resta()
{
  var num1=Number(document.getElementById('n1').value);
  var num2=Number(document.getElementById('n2').value);
  var res2=num1-num2;
  document.getElementById('res2').value=res2;

}

function multiplicacion()
{
  var num1=Number(document.getElementById('n1').value);
  var num2=Number(document.getElementById('n2').value);
  var res3=num1*num2;
  document.getElementById('res3').value=res3;

}

function division()
{
  var num1=Number(document.getElementById('n1').value);
  var num2=Number(document.getElementById('n2').value);
  var res4=num1/num2;
  document.getElementById('res4').value=res4;

}