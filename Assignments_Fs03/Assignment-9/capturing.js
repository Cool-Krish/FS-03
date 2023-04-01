
 document.querySelector(".list").addEventListener(
  "focus",
  function (event) {
    console.info(`${event.type} event fired on ${this.nodeName}`);
    event.target.style.background = "#eee"
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
    console.log("eventPhase:", event.eventPhase);
  },
  true
 );

