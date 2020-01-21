// cb means "callback"
function sayHelloNTimes(nTimes, cb) {
  let counter = 0;
  let intervalID;

  function sayHello() {
    counter++;
    console.log("hello guys!");

    if (counter === nTimes) {
        clearInterval(intervalID)
        cb()
    };
  }

  intervalID = setInterval(sayHello, 100);
}
