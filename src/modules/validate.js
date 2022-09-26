export function validate(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    let text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }