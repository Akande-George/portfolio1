// Option 2 - jQuery Smooth Scroll
// $('.navbar a').on('click', function(e) {
//     if(this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, #landing-body').animate({
//             scrollTop: $(hash).offset().top
//         }, 
//         800);
//     }
// });


//Option 3 
const scroll = new SmoothScroll(' .navbar a[href*="#"]', {
    speed: 800
});

$(function(){
    $("#port-img").on({
     mouseenter: function(){
      $(this).attr('src','./images/replace.jp');
    },
    mouseleave: function(){
      $(this).attr('src','http://openclipart.org/image/800px/svg_to_png/17103/claudita_home_icon.png');
    }
    });
    
  });