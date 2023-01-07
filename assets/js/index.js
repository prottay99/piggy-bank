//page switch
document.getElementById('formBtn').addEventListener('click',function(){
    const formEmail = document.getElementById('formEmail');
    const email = formEmail.value;
    const formPassword = document.getElementById('formPassword');
    const password = formPassword.value;

    if(email=='user@gmail.com' && password == '1234'){
        window.open ('bankpage.html');
    }
    else{
        document.getElementById('hideTxt').style.display ='block';
    }

})
document.getElementById('depositeBtn').addEventListener('click',function(){
    console.log("done");
})