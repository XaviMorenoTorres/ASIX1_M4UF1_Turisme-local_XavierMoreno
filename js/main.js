let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    document.getElementById("texto[n]").style.display = 'block';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    document.getElementById('relleno').style.display = 'none';
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let id1 = document.getElementById("id1");
    let id2 = document.getElementById("id2");
    let id3 = document.getElementById("id3");
    let id4 = document.getElementById("id4");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex === 1) {
        id1.style.display = "block";
        id2.style.display = "none";
        id3.style.display = "none";
        id4.style.display = "none";
    } else if (slideIndex === 2) {
        id1.style.display = "none";
        id2.style.display = "block";
        id3.style.display = "none";
        id4.style.display = "none";
    } else if (slideIndex === 3) {
        id1.style.display = "none";
        id2.style.display = "none";
        id3.style.display = "block";
        id4.style.display = "none";
    } else {
        id1.style.display = "none";
        id2.style.display = "none";
        id3.style.display = "none";
        id4.style.display = "block";
    }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}