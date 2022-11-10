let userName = document.getElementsByClassName('userName')
let eMail = document.getElementsByClassName('eMail')
let myForm = document.getElementsByClassName('myForm')
let msg = document.getElementsByClassName('msg')

function submit(){
  myForm.preventDefault();
  
  if(userName.value === "" || eMail.value === ""){
     msg.innerHTML = "Please Enter Fields";

    setTimeout(() => msg.remove(), 3000);
    }
}
