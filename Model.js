let noticeboard=document.getElementsByClassName('noticeboard');
let nta=document.getElementsByClassName('nta');
let p=document.querySelectorAll('p');
let notice=document.querySelector('.notice');
let mainnews=document.querySelector('#mainnews');
let flowtext=document.getElementById('flowtext');
let publicnotice=document.querySelector('.publicnotice');
let newsevent=document.querySelector('.newsevent');
let god=document.querySelectorAll('#god');
let post=document.querySelector('#post');
/*let dotted=document.getElementsByClassName('dotted');*/
newsevent.addEventListener('click',()=>{
  publicnotice.classList.add('newsevent')
  newsevent.classList.remove('newsevent')
  flowtext.style.visibility='hidden';
  post.style.visibility='visible';
  post.style.color='rgba(0,0,0,1)';
  post.style.fontSize="15px";
  post.innerHTML='<!--<i class="fas fa-heart"></i><br>-->No post to display<!--<p><i class="fas fa-caret-right"></i><a href="#">NEET(UG) 2024 Exam paper is leak in many states</a><b id="new">NEW!</b></p><br><div class="dotted"></div><p><i class="fas fa-caret-right"></i><a href="#">NEET(UG)2024 Exam case issued in supreme court</a><b id="new">NEW!</b></p><br><div class="dotted"></div>-->';
})
publicnotice.addEventListener('click',()=>{
  publicnotice.classList.remove('newsevent')
  newsevent.classList.add('newsevent')
  flowtext.style.visibility='visible';
  post.style.visibility='hidden';
  post.innerHTML='';
})
function Ans(){
  swal("Close","Answer key challenge has been closed","error");
}