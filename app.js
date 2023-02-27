// assign
let gallery = document.querySelector("#balloon-gallery");
let message = document.querySelector("#yay-no-balloons");
const balloons = document.querySelectorAll(".balloon");

// foreach 문 ) 마우스오버로 풍선위에 커서를 올리면 벌룬 이미지 사라지고 pop! 텍스트 보이기
// 풍선들이 텍스트 팝을 가지고있지않다면 ? 디스플레이 논 그외 디스플레이 블럭
// console.log(balloons);

balloons.forEach((balloon) => {
  balloon.addEventListener("mouseover", function (e) {
    balloon.style.backgroundColor = "#ededed";
    balloon.textContent = "POP!";
    // balloon.classList.add("ok");

    // balloons.forEach((pop) => {
    //   console.log(pop.classList.contains("ok"));
    //   if (pop.classList.contains("ok")) {
    //     gallery.style.display = "none";
    //     message.style.display = "block";
    //   } else {
    //     gallery.style.display = "block";
    //     message.style.display = "none";
    //   }
    // });

    let all = true;
    balloons.forEach((pop) => {
      if (!pop.textContent.includes("P")) {
        all = false;
      }
      // includes 는 (POP!) 쓰면 모두다 , p 만 써도  가진것 다 찾아냄
    });
    if (all) {
      gallery.style.display = "none";
      message.style.display = "block";
    }
  });
});
