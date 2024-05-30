$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });


let fname = document.getElementById('fname');
let femail = document.getElementById('femail');
let fnumber = document.getElementById('fnumber');

function validateForm(){
  if(fname.value == ""){
    document.getElementById("nameerror").innerHTML = "User name is empty";
  }else if(fname.value.length < 3){
    document.getElementById("nameerror").innerHTML = "User name contain minimum 2 alphabate"; 
  }else{
    document.getElementById("nameerror").innerHTML = "";
  }

  if(femail.value == ""){
    document.getElementById("emailerror").innerHTML = "email  is empty";
  }else if(femail.value.length > 40){
    document.getElementById("emailerror").innerHTML = "email is too high"; 
  }else{
    document.getElementById("emailerror").innerHTML = "";
  }

  if(fnumber.value == ""){
    document.getElementById("numbererror").innerHTML = "Number  is empty";
  }else if(fnumber.value.length != 10){
    document.getElementById("numbererror").innerHTML = "Number should contain 10 digit"; 
  }else{
    document.getElementById("numbererror").innerHTML = "";
  }

  return false;
}