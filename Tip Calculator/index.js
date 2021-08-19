
function tipCalc(){
    var isfeedback = false;
    const billAmount= document.getElementById("billAmount").value;
    const tipPercent=document.getElementById("percent").value;
    const people=document.getElementById("people").value;
    const feedback=document.getElementById("feedback");
    if(+billAmount<0||billAmount==""){
        console.log(billAmount);
        feedback.innerText="Please enter a valid bill amount";
        feedback.style.color="red";
        isfeedback=true;
}else if(tipPercent=="0"){
feedback.innerText="Please choose a valid tip percentage";
feedback.style.color="red";
isfeedback=true;
}else if(+people<0||people==""){
    feedback.innerText="Please enter a valid number of people";
    feedback.style.color="red";
    isfeedback=true;
}
if(!isfeedback){
    document.getElementById("amount").style.display = "block";
  const tip=+billAmount*(+tipPercent);
    document.getElementById("tip").innerText=tip.toFixed( 2 );
    document.getElementById("total").innerText=(+billAmount+tip).toFixed( 2 );
    document.getElementById("perPerson").innerText=((+billAmount+tip)/(+people)).toFixed( 2 );
    feedback.innerText="";
  }
}