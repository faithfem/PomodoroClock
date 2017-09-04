$(document).ready(function(){
  /*var buzzer = $("#buzzer")[0];
  buzzer.play();*/
  var count = 5;
  var count = parseInt($("#breakNum").html());
  console.log(count);
  $("#reset").hide();
  
$("#minus5Clock").click(function(){
  if(count>5){
    count -=5;
    $("num").html(count);
  
$("#add5Clock").click(function(){
    count +=5;
    $("#num").html(count);
});  
  
  $("#minus5Break").click(function(){
  if (breakTime > 5){
    breaktime -=5;
    $("#breaknum").html(breakTime);
 });

$("#add5Break").click(function(){
    breaktime +=5;
    $("#breakNum").html(breakTime);
  });  
   
});