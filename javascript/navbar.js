$(document).ready(function() {
  $('.smooth').click(function(event) {
     event.preventDefault();
     $('html, body').animate({
          scrollTop : $(this.hash).offset().top
      }, 1000);
  });

});
