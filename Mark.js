const marks=document.getElementById('marks');
const apple=document.getElementById('apple');
var soul=document.getElementsByClassName('soul');
var soul=document.getElementById('soul');
const date=document.querySelector('.date');
const month=document.querySelector('.month');
const year=document.querySelector('.year');
const dob=document.getElementById('dob');
const option=document.getElementsByTagName('option');
const small=document.getElementsByTagName('small');
const pin=document.getElementById('pin');
document.getElementsByTagName('body');
document.getElementById("key")
function show(){
  document.getElementById("key").innerHTML=" ";
  let digit='1234567890';
  let val='';
   for(let i=0;i<6;i++){
     let store=digit.charAt(Math.floor(Math.random()*digit.length));
     val=val+store;
   }
   document.getElementById("key").innerHTML=val;
}
function refresh(){
  show();
}
function full(){
  var date0=document.marks.date.value;
  var month0=document.marks.month.value;
  var year0=document.marks.year.value;
        if(date0===""){
          setErrorMsg(date,"date cannot be blank");
       }
         else{
          setSuccessMsg(date);
        }
      if(month0==="m"){
        setErrorMsg(month,"month cannot be blank");
      }else{
        setSuccessMsg(month);
      }
      if(year0==="y"){
        setErrorMsg(year,"year cannot be blank");
      }else{
        setSuccessMsg(year);
      }
   successMsg(); 
}
marks.addEventListener(('submit'),(e)=>{
  e.preventDefault();
  valiDate();
})

const sendData=(sRate,count)=>{
  if(sRate===count){
  // swal("Success","","success");
    location.href="/index.html";
  }/*else{
    swal("Error","your scorecard is not generated","error");
  }*/
}
const successMsg=()=>{
  let soul=document.getElementsByClassName("soul");
  let count=soul.length-1;
  for(let i=0;i<soul.length;i++){
    if(soul[i].className==="soul success"){
      let sRate=0+i;
      sendData(sRate,count);
    }else{
      return false;
    }
  }
}
const isPin=(pinVal)=>{
  const key=document.getElementById("key").innerHTML;
  if(pinVal!==key)return false;
    return true;
}
const valiDate=()=>{
  const appleVal=apple.value.trim();
  var pinVal=pin.value.trim();
  //Application no.
  if(appleVal===""){
  setErrorMsg(apple,"appplication number cannot be blank");}
   else if(appleVal.length!==12){
    setErrorMsg(apple,'application number must contains 12 digits number only');
  }else if(appleVal[0]!=="2"){
    setErrorMsg(apple,'Invalid first digit in application no.');
  }else if(appleVal[1]!=="4"){
    setErrorMsg(apple,'Invalid second digit in application no.');
  }
   else{
    setSuccessMsg(apple);
  }
    //pin
    if(pinVal===""){
    setErrorMsg(pin,"Security Pin cannot be blank");
   }
   else if(pinVal.length > 6){
     setErrorMsg(pin,"Security Pin must contains 6 digit no.only  ");}
   else if(pinVal.length < 6){
     setErrorMsg(pin,"Security Pin must contains 6 digit no.only");}
   else if(!isPin(pinVal)){
    setErrorMsg(pin,"Security pin not verified");
  }
   else{
    setSuccessMsg(pin);
  }
    successMsg();
}
function setErrorMsg(input,errormsgs){
  const soul=input.parentElement;
  const small=soul.querySelector('small');
  soul.className="soul error";
  small.innerText=errormsgs;
}
function setSuccessMsg(input){
  const soul=input.parentElement;
  soul.className="soul success";
}
