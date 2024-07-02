// feature-section carousel
$('.owl-1').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },   
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true,
            margin:10,
        }
    }
})

// deal-section-carousel 
$('.owl-2').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:true,
            loop:false,
        },
        1400:{
            items:3,
            nav:true,
            loop:false,
        }
    }
})
$('.owl-3').owlCarousel({
  loop:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
  }
})

// deal-section timer
var countDownDate = new Date("Jan 15, 2025 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let a =  document.getElementsByClassName("day");
  for(let i=0 ;i<a.length;i++){
    a[i].innerHTML = days
  }
  let b = document.getElementsByClassName("hrs");
  for(let i=0 ;i<b.length;i++){
    b[i].innerHTML = hours
  }
 let c = document.getElementsByClassName("min");
 for(let i=0 ;i<c.length;i++){
    c[i].innerHTML = minutes
  }
  let d = document.getElementsByClassName("sec");
  for(let i=0 ;i<d.length;i++){
    d[i].innerHTML = seconds
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// about-section-testimonial
$('.owl-4').owlCarousel({
  loop:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
  }
})