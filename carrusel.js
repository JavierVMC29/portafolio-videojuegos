const images = ["patio", "administracion", "celda", "libre", "demo"];

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  carousel.innerHTML = `<img src="./assets/landing/${images[currentIndex]}.jpg" alt="Imagen 1" class="img-carousel">`;

  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  function showSlide(index) {
    const totalSlides = images.length;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    console.log(index);

    carousel.innerHTML = `<img src="./assets/landing/${images[currentIndex]}.jpg" alt="Imagen 1" class="img-carousel">`;
  }
});

const images2 = ["1", "2", "3"];

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel-1");
  const prevBtn = document.getElementById("prevBtn-1");
  const nextBtn = document.getElementById("nextBtn-1");

  let currentIndex = 0;

  carousel.innerHTML = `<img src="./assets/img/${images2[currentIndex]}.png" alt="Imagen 1" class="img-carousel">`;

  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  function showSlide(index) {
    const totalSlides = images2.length;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    console.log(currentIndex);

    carousel.innerHTML = `<img src="./assets/img/${images2[currentIndex]}.png" alt="Imagen 1" class="img-carousel">`;
  }
});
