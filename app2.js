let gallery = document.querySelector("#balloon-gallery");
let message = document.querySelector("#yay-no-balloons");
let popped = 0;
const balloons = document.querySelectorAll('.balloon');

balloons.forEach((b) => {
  b.addEventListener("mouseover", function (e) {
    b.style.backgroundColor = "#ededed";
    b.textContent = "POP!";
    if (!b.classList.contains('popped')) {
      popped++;
    }
    b.classList.add('popped');
    checkAllPopped();
  });
})

function checkAllPopped() {
  if (popped === 24) {
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}