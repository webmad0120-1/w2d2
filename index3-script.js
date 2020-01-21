function showPreloader() {
    document.querySelector("#overlay").style.display = "block";
    document.querySelector("#overlay").style.opacity = "1";
  }

  // this won't work as for loops have a synchronous nature in js
  // for (let posX = 0; posX < 1200; posX++) {
  //     // console.log(posX)
  // document.querySelector("#ball").style.left = `${posX}px`
  // }

  function animateBall() {
    let posX = 0;
    let posXLimit = 1200;

    let intervalID = setInterval(() => {
      document.querySelector("#ball").style.left = `${(posX += 1)}px`;

      if (posX > posXLimit) {
        document.querySelector("#ball").style.left = `${posXLimit}px`;
        clearInterval(intervalID);
        showPreloader();
      }
    }, 10);
  }

  document.querySelector("#animate").onclick = animateBall

  document.querySelector("#show-preloader").onclick = function() {
    showPreloader();
  };

  //   animateBall();