
var button = document.getElementById("submit");
const initial_cost = 500;

button.addEventListener("click", calculate);


function calculate() {
   education = document.getElementById("education").value;
   networth = document.getElementById("networth").value;
   skills = $('#skills').val();
   total_skill_coef = skills.reduce((a, b) => Number(a) + Number(b), 0)
   

   age = document.getElementById("age").value;
   reputation = document.getElementById("reputation").value;
   education_coef = Number(education);
   networth_coef = Number(networth);
   
   age_coef = Number(age);

   if(reputation == "g0")
      result = (initial_cost * education_coef * networth_coef + total_skill_coef) * age_coef * 1.0;
   else if(reputation == "g1")
      result = (initial_cost * education_coef * networth_coef + total_skill_coef) * age_coef * 0.85 ;
   else if(reputation == "g2")
      result = (initial_cost * education_coef * networth_coef + total_skill_coef) * age_coef * 0.9 ;
   else if(reputation == "g3")
      result = (initial_cost * education_coef * networth_coef + total_skill_coef) * age_coef - 200;

   // alert(result);
   // document.getElementById("insert").innerHTML = x;
   window.location.href = 'result.html#' + String(result); 
}
