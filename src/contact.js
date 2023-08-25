const submit_button = document.querySelector(".submit");
const inputs = document.querySelectorAll(".input-control");
const labels = Object.values(document.querySelectorAll(".label-control"));
const textarea = document.querySelector("textarea");
/*---------------------------Clear Contact Form-------------------------*/
const IsFilled = () => {
    let flag = true;
    inputs.forEach((element) => {
      if (element.hasAttribute("required") && element.value == "") {
        flag = false;
      }
    });
    return flag;
  };
  const clear_input = () => {
    if (IsFilled()) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
      textarea.value = "";
    }
  };
  const increaseTop =(e,i)=>{
     if(e.target.value!=""&&e.target.value[0]!=" "){
       labels[i].style.top = "-25px";
     }
     else{
      labels[i].style.top = "-8px";
     }
  }
  const Waitforsubmission = () => {
    setTimeout(clear_input, 10);
  };
  submit_button.addEventListener("click", Waitforsubmission);
  inputs.forEach((input,i)=>{input.addEventListener("input",(e)=>increaseTop(e,i));}
  )