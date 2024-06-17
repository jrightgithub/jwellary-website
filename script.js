document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  const signupButton = document.querySelector('.primaryBtn');
  const closeBtn = document.querySelector('.close');
  const dialog = document.querySelector('.dialog');
  const dialog1 = document.querySelector('.dialog1');
  const closeBtn1 = document.querySelector('.close1');
  const signIn = document.querySelector('.signInButton');
  const addUser = document.querySelector('.addUser');
  const signUpButton = document.querySelector('.signUpButton');
  const loggedIn = document.querySelector('.loggedIn');
  const userOrAdminDialog=document.querySelector('.adminOrUser')
  const userOrAdminCloseBtn=document.querySelector('.adminOrUser-close')
  const userSignInDialog=document.querySelector('.userSignInBtn')
  const adminSignInBtn=document.querySelector('.adminSignInBtn')
  const adminSignIn=document.querySelector('.adminSignIn')
  const adminSignInClose=document.querySelector('.adminSignIn-close')
  const adminSignUpClose=document.querySelector('.adminSignUpClose')
  const adminAddUser=document.querySelector('.adminAddUser')
  const adminsignUp=document.querySelector('.adminsignUp')
  const adminSignUpButton=document.querySelector('.adminSignUpButton')
  const adminLoggedIn=document.querySelector('.adminLoggedIn')
  const forgetPassWordText=document.querySelector('.forgetPassWordText')
  const forgetPassWord=document.querySelector('.forgetPassWord')
  const forgetPasswordClose=document.querySelector('.forgetPasswordClose')
  const backToLogin=document.querySelector('.backToLogin')
  const backToLoginOtp=document.querySelector('.backToLoginOtp')
  const forgetButton=document.querySelector('.forgetButton')
  const otpClose=document.querySelector('.otpClose')
  const otp=document.querySelector('.otp')
  const otpButton=document.querySelector('.otpButton')
  const newPassword=document.querySelector('.newPassword')
  const newPasswordClose=document.querySelector('.newPasswordClose')
  const backToLoginNewPassword=document.querySelector('.backToLoginNewPassword')
  const newPasswordButton=document.querySelector('.newPasswordButton')
  forgetButton.addEventListener('click',(event)=>{
   event.preventDefault();
    otp.style.display='flex'
  })
  forgetPassWordText.addEventListener('click',()=>{
    forgetPassWord.style.display='flex'
  })
  otpButton.addEventListener('click',(event)=>{
    event.preventDefault()
    newPassword.style.display='flex'
  })
  newPasswordClose.addEventListener('click',()=>{
    newPassword.style.display='none'
  })
  forgetPasswordClose.addEventListener('click',()=>{
    forgetPassWord.style.display='none'
  })
  backToLoginOtp.addEventListener('click',()=>{
    forgetPassWord.style.display='none'
  })
  otpClose.addEventListener('click',()=>{
    otp.style.display='none'
  })
  backToLoginOtp.addEventListener('click',()=>{
    otp.style.display='none'
  })
  newPasswordButton.addEventListener('click',()=>{
    newPassword.style.display='none';
    otp.style.display='none';
    forgetPassWord.style.display='none'
  })
  backToLoginNewPassword.addEventListener('click',()=>{
    newPassword.style.display='none';
    otp.style.display='none';
    forgetPassWord.style.display='none'
  })
  backToLogin.addEventListener('click',()=>{
    forgetPassWord.style.display='none'
  })
  backToLogin.addEventListener('click',()=>{
    dialog1.style.display='flex'
  })
  adminAddUser.addEventListener('click',()=>{
    adminsignUp.style.display='flex'
  })
  adminSignUpClose.addEventListener('click',()=>{
    adminsignUp.style.display='none'
  })
  // adminSignUpButton.addEventListener('click',()=>{
  //   adminsignUp.style.display='none'
  // })
  adminLoggedIn.addEventListener('click',()=>{
    adminsignUp.style.display='none'
  })
  adminSignUpButton.addEventListener('click',(event)=>{
    event.preventDefault()
    adminSignIn.style.display='flex'
  })
  adminSignUpButton.addEventListener('click',(event)=>{
    adminsignUp.style.display='none'
  })
  adminLoggedIn.addEventListener('click',()=>{
    adminSignIn.style.display='flex'
  })
  adminSignInBtn.addEventListener('click',()=>{
    adminSignIn.style.display='flex'
  })
  adminAddUser.addEventListener('click',()=>{
    adminSignIn.style.display='none'
  })
  adminSignInClose.addEventListener('click',()=>{
    adminSignIn.style.display='none'
  })
  signupButton.addEventListener('click', (event) =>{
    event.preventDefault(); 
    userOrAdminDialog.style.display = 'flex';
  });
  userOrAdminCloseBtn.addEventListener('click',()=>{
    userOrAdminDialog.style.display = 'none';
    
  })
  userSignInDialog.addEventListener('click',()=>{
    dialog1.style.display = 'flex';
  })
  addUser.addEventListener('click', (event) => {
    dialog.style.display = 'flex';
  });
  addUser.addEventListener('click', () => {
    dialog1.style.display = 'none';
  });
  setTimeout(()=>{
    userOrAdminDialog.style.display = 'flex';
  },5000)
  signUpButton.addEventListener('click', () => {
    dialog.style.display = 'none';
  });
  loggedIn.addEventListener('click', () => {
    dialog.style.display = 'none';
  });
  signUpButton.addEventListener('click', () => {
    dialog1.style.display = 'flex';
  });
  loggedIn.addEventListener('click', () => {
    dialog1.style.display = 'flex';
  });
  closeBtn.addEventListener('click', () => {
    dialog.style.display = 'none';
  });
  signIn.addEventListener('click', () => {
    dialog1.style.display = 'none';
  });

  closeBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action
    dialog1.style.display = 'flex';
  });
  closeBtn1.addEventListener('click', () => {
    dialog1.style.display = 'none';
  });
  // Close the dialog if the user clicks anywhere outside of the dialog
  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.style.display = 'none';
    }
  });



});
