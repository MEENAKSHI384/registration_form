$(function(){
  $("#password").passwordStrength();
});
function handleSubmit(event){
  event.preventDefault();
  var form=document.getElementById("registrationForm");
  form.style.display="none";
  var confirmationPage=document.getElementById("confirmationPage");
  confirmationPage.style.display="block";
}