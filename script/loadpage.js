var o = 1 
function tim(){
  var timkiem = document.getElementById("tim");
  if(o==1){
    timkiem.style.visibility="visible";
    o=0;
  } 
  else{
    timkiem.style.visibility="hidden";
    o=1;
  }
}

function search(){
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
  const searchInput = document.getElementById('search-input').value;
  window.location.href = `images.html?search=${searchInput}`;
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}