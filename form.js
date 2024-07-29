const signUpbutton=document.getElementById('signUpbutton');
const signInbutton=document.getElementById('signInbutton');
const signInForm=document.getElementById('signin');
const signUpForm=document.getElementById('signup');

signUpbutton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})

signInbutton.addEventListener('click',function(){
    signUpForm.style.display="none";
    signInForm.style.display="block";
})