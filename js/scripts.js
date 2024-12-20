const playIcon = document.querySelector(".footer__img");
const closeIcon = document.querySelector(".trailer__close");

playIcon.addEventListener('click', toggleVideo);
closeIcon.addEventListener('click', toggleVideo);


function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");

  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
}