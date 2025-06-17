// init materialize
// document.addEventListener("DOMContentLoaded", function () {
//   let elems = document.querySelectorAll(".carousel");
//   let instances = M.Carousel.init(elems, {
//     duration: 200,
//     dist: -100,
//     shift: 0,
//     padding: 0,
//     numVisible: 5,
//   });
// });

// function toggleVideo() {
//   const trailer = document.querySelector(".tailer");
//   const video = document.querySelector("video");
//   video.pause();
//   trailer.classList.toggle("active");
// }

// function changeBg(bg, title) {
//   const banner = document.querySelector(".banner");
//   const contents = document.querySelectorAll(".content");
//   banner.style.background = `url("../images/movies/${bg}")`;
//   banner.style.backgroundSize = "cover";
//   banner.style.backgroundPosition = "center";

//   contents.forEach((content) => {
//     content.classList.remove("active");

//     if (content.classList.contains(title)) {
//       content.classList.add("active");
//     }
//   });

// }

// nyoba
document.addEventListener("DOMContentLoaded", function () {
  // utk autoplay
  let carousel = document.querySelector(".carousel");
  const instance = M.Carousel.init(carousel, { duration: 400 });
  // end autoplay

  // click control
  let elems = document.querySelectorAll(".carousel");
  let instances = M.Carousel.init(elems, {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
  });
  // end click control

  // Auto-play dengan membaca data dari item carousel
  let autoplayInterval = setInterval(autoplayNext, 8000);

  function autoplayNext() {
    const activeIndex = instance.center;
    const items = carousel.querySelectorAll(".carousel-item");
    const nextIndex = (activeIndex + 1) % items.length;

    // Pindah ke item berikutnya
    instance.set(nextIndex);

    // Dapatkan data dari item
    const nextItem = items[nextIndex];
    const bg = nextItem.dataset.bg;
    const title = nextItem.dataset.title;

    // Update background
    changeBg(bg, title, nextItem);
  }

  // Handle hover pause
  carousel.addEventListener("mouseenter", () =>
    clearInterval(autoplayInterval)
  );
  carousel.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(autoplayNext, 8000);
  });
});

function toggleVideo() {
  const trailer = document.querySelector(".tailer");
  const video = document.querySelector("video");
  video.pause();
  trailer.classList.toggle("active");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../images/movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");

    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });

  
}
