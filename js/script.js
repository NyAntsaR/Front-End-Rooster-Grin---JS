$(document).ready(function() {
    var typed = new Typed(".typed", {
        strings: ["Rooster Grin"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});

// Read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "> Lorem Ipsum";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "> Ipsum Lorem";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "> Lorem Ipsum";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "> Ipsum Lorem";
      moreText.style.display = "inline";
    }
  }


